;; Pure ClojureScript full-stack terminal evaluator.
(ns gio.core
  (:require [om.core :as om]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [clojure.string :as string]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            [gio.command :as cmd]))


(def app-state (atom {:headline "PLACEHODLER"
                      :commands {}
                      :log {}
                      :prompt "λ > "
                      :history []}))


(defn log [o]
  (.log js/console o))


(defn open-link [url]
  (.open js/window url "_blank"))

(defn focus []
  (.focus (.getElementById js/document "input-box")))


(cmd/bind-data app-state)

(cmd/register :about "a bit about me"
              (fn [opts]
                (cmd/output "Uhmm... I don't what to write anything at this moment")))


(cmd/register :github "goto my github page"
              (fn [opts]
                (open-link "https://github.com/gizak")))


(cmd/register :source "view this page's source code"
              (fn [opts]
                (open-link "https://github.com/gizak/gizak.github.io/blob/source/src/index/core.cljs")))

(cmd/register :clear "clear all history"
              (fn [opts] (cmd/clear) true))


(cmd/register :echo "cat input pipe"
              (fn [opts]
                (cmd/output (string/join " " (:arguments opts)))
                true))


(declare set-bg)
(cmd/register :bg "set background color, provided value as css color format"
              (fn [opts]
                (set-bg (first (:arguments opts)))))

(cmd/register :copyright "dump my info"
              (fn [opts]
                (cmd/output "@copyright gizak, Jan 23 2015")
                (cmd/output-raw "<br>")
                (cmd/output "This is supposed to be an index page. It appears as a terminal simulator because the author, gizak, has absolutely no idea how to present a landing page without boredom.")
                (cmd/output-raw "<br>")
                (cmd/output "For more information, enter command `help` to list all available commands, type `about` to know a little bit about me and hit `source` if you are interested in this page.")
                (cmd/output-raw "<br>")))


(cmd/register :help "commands summary"
              (fn [opts]
                (if (= [] (:arguments opts))
                  (doseq [v (vals (cmd/all-commands))]
                    (cmd/output-raw (string/replace
                                     (gstring/format "%-12s %s" (:name v) (:info v))
                                     " "
                                     "&nbsp;"))))))


(defn set-bg [clr]
  (set! (.. js/document
            -body
            -style
            -backgroundColor) clr))




(defcomponent viewport [data owner]
  (init-state [_]
              {:inputing? true
               :line ""})
  (will-mount [_])

  (did-mount [_]
             (cmd/call "copyright")
             (om/refresh! owner)
             (focus))
  (render-state [_ {:keys [inputing? line]}]
                (dom/div {:id "term-box"}
                         (for [h (cmd/history)]
                           (condp = (:type h)
                             :output (dom/p {:class "history-output"}
                                            (:content h))
                             :output-raw (dom/p {:class "history-output"
                                                 :dangerously-set-innerHTML
                                                 {:__html (:content h)}})
                             :input (dom/p {:class "history-input"}
                                           (str (:prompt data) (:content h)))))
                         (if inputing?
                           (dom/p {:id "input-table"}
                                  (dom/span {:id "input-prompt"}
                                            (:prompt data))
                                  (dom/input {:id "input-box"
                                              :on-change (fn [e]
                                                           (om/set-state!
                                                            owner
                                                            :line
                                                            (.. e -target -value)))
                                              :value line
                                              :auto-focus true
                                              :on-key-press (fn [e]
                                                              (if (= "Enter" (.-key e))
                                                                (do
                                                                  (om/set-state! owner :inputing? false)
                                                                  (cmd/record-input line)
                                                                  (cmd/call (.. e -target -value))
                                                                  (om/set-state! owner :line "")
                                                                  (om/set-state! owner :inputing? true)
                                                                  (focus))))}))))))


(om/root viewport app-state
 {:target (. js/document (getElementById "app"))})
