(ns indexp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))


(enable-console-print!)


(def app-state (atom {:slide [{:src "/img/sky2.jpg" :fade 700}
                              {:src "/img/sky1.jpg" :fade 700}]
                      :audio [{:url "http://freshly-ground.com/data/audio/sm2/Adrian Glynn - Seven Or Eight Days.mp3"
                               :id "Seven Or Eight Days - Adrian Glynn"
                               :ref "#"}]
                      :cursor 0
                      :state "initialing"}))


;; translate player icon css
(def state-icon-css {:idle "fa fa-play"
                     :playing "fa fa-pause"
                     :loading "fa fa-spinner fa-spin"
                     :initialing "fa fa-spinner fa-spin"
                     :paused "fa fa-play"})


(defn current-track []
  (get (:audio @app-state) (:cursor @app-state)))


(defn change-state [app sta]
  (om/transact! app :state #(identity sta)))


(defn play-current-track [app]
  (.createSound js/soundManager #js {:url (:url (current-track))
                                     :id (:id (current-track))
                                     :autoLoad true
                                     :autoPlay true
                                     :onplay #(change-state app "playing")}))

(defn player-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:icon-css ""})
    om/IWillMount
    (will-mount [_]
      (go (<! (timeout 1000)) (play-current-track app))
      (go (loop []
            (let [css (get state-icon-css (keyword (:state @app)))]
              (om/set-state! owner :icon-css css)
              (<! (timeout 500))
              (recur)))))
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:className "player"}
               (dom/p nil
                      (dom/i #js {:className (:icon-css state)
                                  :onClick (fn [] (case (:state @app)
                                                    "idle" (do
                                                             (change-state app "loading")
                                                             (play-current-track app))
                                                    "playing" (do (change-state app "paused")
                                                                  (.pause js/soundManager (:id (current-track))))
                                                    "paused" (do (change-state app "playing")
                                                                 (.play js/soundManager (:id (current-track))))
                                                    nil))})
                      (dom/span nil (:id (current-track))))))))



(om/root
 player-view
 app-state {:target (.getElementById js/document "add-on")})


(js/$ (fn [] (.vegas js/$ "slideshow" (clj->js {:delay 4500
                                                :backgrounds (:slide @app-state)}))))


(.setup js/soundManager #js {:url "/js/sm/swf/"
                             :onready (fn []
                                        (swap! app-state assoc :state "idle"))})
