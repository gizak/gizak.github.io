;; Pure ClojureScript full-stack terminal evaluator.
(ns gio.core
  (:require [reagent.core :as r]
            [clojure.string :as string]
            [goog.string :as gstring]
            [goog.string.format :as gformat]
            [gio.command :as cmd]))


(defonce app-state (r/atom {:headline "PLACEHODLER"
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
                (cmd/output "Let's start with obvious, I am not good at writing...")))


(cmd/register :github "goto my github page"
              (fn [opts]
                (open-link "https://github.com/gizak")))


(cmd/register :source "view this page's source code"
              (fn [opts]
                (open-link "https://github.com/gizak/gizak.github.io/blob/source/src/gio/core.cljs")))

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



(defn viewport []
  (let [line (r/atom "")
        inputing? (r/atom true)]
    (fn []
      [:div#term-box
            (for [h (cmd/history)]
              (condp = (:type h)
                :output      [:p.history-output (:content h)]
                :output-raw  [:p.history-output {:dangerously-set-innerHTML {:__html (:content h)}}]
                :input       [:p.history-output (str (:prompt @app-state) (:content h))]))
            (if @inputing?
              [:p#input-table
               [:span#input-prompt (:prompt @app-state)]
               [:input#input-box {:on-change #(reset! line (.. % -target -value))
                                  :value @line
                                  :auto-focus true
                                  :on-key-press (fn [e]
                                                  (if (= "Enter" (.-key e))
                                                    (do
                                                      (reset! inputing? false)
                                                      (cmd/record-input @line)
                                                      (cmd/call (-> e .-target .-value))
                                                      (reset! line "")
                                                      (reset! inputing? true)
                                                      (focus))))}]])])))


(defn ^:export run []
  (r/render [viewport]
            (js/document.getElementById "app"))
  (cmd/call "copyright")
  (focus))
