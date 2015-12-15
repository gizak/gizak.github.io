(ns gio.command
  (:require [clojure.string :as string]
            [cljs.tools.cli :refer [parse-opts summarize]]
            [reagent.core :as r]))

(def re-single-q "(@djnqonfa0djq0923u103it59u4978t2i45jtor8uvna38ufq935u9tgoy24r7oqdh108rhirb)")
(def re-double-q "(@284ijgtpw99jt2pu4ght284ruqprgw89tjwp9qh94fhwufh89qufhqfhd98hfu5q0ewfu24h8)")

(defn w-flag-type [w]
  (cond
    (re-find #"^\"" w) :double
    (re-find #"\"$" w) :double
    (re-find #"^'" w) :single
    (re-find #"'$" w) :single
    :else nil))


(defn w-flag [w]
  (cond
    (re-find #"^\"" w) :left-double
    (re-find #"\"$" w) :right-double
    (re-find #"^'" w) :left-single
    (re-find #"'$" w) :right-single
    :else nil))


(defn w-clean [w]
  (condp = (w-flag w)
    :left-double (string/replace w #"^\"" "")
    :left-single (string/replace w #"^'" "")
    :right-double (string/replace w #"\"$" "")
    :right-single (string/replace w #"'$" "")
    w))


(defn w-replace [w]
  (.replace
   (.replace w "\\'" re-single-q)
   "\\\"" re-double-q))


(defn w-recover [w]
  (.replace
   (.replace w re-single-q "'") re-double-q "\""))


(defn w-trim [w]
  (cond
    (= (w-flag-type w) :double) (string/replace w #"^\"(.*)?\"$" "$1")
    (= (w-flag-type w) :double) (string/replace w #"^'(.*)?'$" "$1")
    :else w))


(defn split-args
  ([input]
   (split-args (string/split (string/trim input) #"\s") [] [] nil))
  ([args* args cache flag]
   (if (empty? args*)
     (if (empty? cache)
       args
       (throw "could not parse args"))
     (let [w (w-replace (w-trim (first args*)))
           r (rest args*)
           f (w-flag w)]
       (cond
         (= flag :double) (if (= f :right-double)
                            (split-args r
                                        (conj args(string/join " " (conj cache (w-recover (w-clean w)))))
                                        []
                                        nil)
                            (split-args r
                                        args
                                        (conj cache (w-recover w))
                                        flag))
         (= flag :single) (if (= f :right-single)
                            (split-args r
                                        (conj args (string/join " " (conj cache (w-recover (w-clean w)))))
                                        []
                                        nil)
                            (split-args r
                                        args
                                        (conj cache (w-recover w))
                                        flag))
         :else (cond
                 (= f :left-double) (split-args r
                                                args
                                                (conj cache (w-recover (w-clean w)))
                                                :double)
                 (= f :left-single) (split-args r
                                                args
                                                (conj cache (w-recover (w-clean w)))
                                                :single)
                 :else (split-args r (conj args (w-recover w)) cache nil)))))))



(defonce data (r/atom nil))

(defn bind-data [d]
  (reset! data d))

(defn register [cmd info func & opts]
  (swap! @data
         assoc-in
         [:commands cmd]
         {:handler func
          :name (name cmd)
          :info info
          :opts opts}))


(defn add-history [el]
  (swap! @data #(update-in % [:history] conj el)))

(defn output-raw [line]
  (add-history {:type :output-raw
                :content line}))

(defn output [line]
  (add-history {:type :output
                :content line}))

(defn record-input [line]
  (add-history {:type :input
                :content line}))

(defn clear []
  (swap! @data assoc :history []))

(defn all-commands []
  (:commands @@data))


(defn call [cmd*]
  (if (not (empty? cmd*))
    (let [args (split-args cmd*)
          cmd (keyword (first args))]
      (if (contains? (:commands @@data) cmd)
        ((get-in @@data [:commands cmd :handler])
         (parse-opts (rest args) (get-in @@data [:commands cmd :otps])))
        (output (str "sh: command not found: " (name cmd)))))))

(defn history []
  (:history @@data))
