(ns indexp.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <! timeout]]))


(enable-console-print!)


(def app-state (atom {:slide [{:src "/img/background/sky2.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/2013-07-08 19.37.54.jpg" :fade 700 :tag "Hometown, Daqing" :text ""}
                              ;{:src "/img/background/IMG_0069.JPG" :fade 700 :tag "Wonderland, Toronto" :text ""}
                              ;{:src "/img/background/IMG_0079.JPG" :fade 700 :tag "Ottawa Canal" :text ""}
                              ;{:src "/img/background/IMG_0086.JPG" :fade 700 :tag "Just where I live" :text ""}
                              ;{:src "/img/background/IMG_0091.JPG" :fade 700 :tag "Night in Morriset library" :text ""}
                              ;{:src "/img/background/IMG_0093.JPG" :fade 700 :tag "Working (coding...)" :text ""}
                              ;{:src "/img/background/wallpaper-1056567.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/wallpaper-783333.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/wallpaper-253958.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/IMG_0099.JPG" :fade 700 :tag "Highway to Toronto" :text ""}
                              {:src "/img/background/wallpaper-1660505.jpg" :fade 700 :tag "" :text ""}
                              {:src "/img/background/wallpaper-2822770.jpg" :fade 700 :tag "" :text ""}
                              {:src "/img/background/IMG_0275.JPG" :fade 700 :tag "On Campus" :text ""}
                              {:src "/img/background/wallpaper-185258.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/IMG_0102.JPG" :fade 700 :tag "Niagara Falls" :text ""}
                              ;{:src "/img/background/IMG_0198.JPG" :fade 700 :tag "Parliament Hill" :text ""}
                              ;{:src "/img/background/wallpaper-335020.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/wallpaper-2467722.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/wallpaper-1305577.jpg" :fade 700 :tag "" :text ""}
                              ;{:src "/img/background/IMG_0387.JPG" :fade 700 :tag "Children's Day, Nanjing Deji Plaza" :text ""}
                              {:src "/img/background/sky1.jpg" :fade 700 :tag "" :text ""}]
                      :audio [{:url "http://freshly-ground.com/data/audio/sm2/Adrian Glynn - Seven Or Eight Days.mp3"
                               :id "Seven Or Eight Days - Adrian Glynn"
                               :ref "#"}
                              {:url "/audio/dan_che.mp3"
                               :id "Dan Che - Eason Chan"
                               :ref "#"}]
                      :cursor 0
                      :nth-slide 0
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
  (.play js/soundManager (:id (current-track)))
  (change-state app "playing"))

(defn player-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:icon-css ""
       :player-css ""
       :ready false})
    om/IWillMount
    (will-mount [_]
      (go (.setup js/soundManager #js {:url "/js/sm/swf/"
                                       :onready (fn []
                                                  (swap! app-state assoc :state "idle")
                                                  (doseq [{:keys [id url]} (:audio @app)]
                                                    (.createSound js/soundManager #js {:url url :id id :autoLoad true
                                                                                       :onplay (fn [] (change-state app "playing")
                                                                                                 (go
                                                                                                   (om/set-state! owner :player-css "animated pulse")
                                                                                                   (<! (timeout 2500))
                                                                                                   (om/set-state! owner :player-css "animated fadeOut")))
                                                                                       :onpause (fn [] (change-state app "paused"))
                                                                                       :onfinish (fn []
                                                                                                   (change-state app "idle")
                                                                                                   (om/transact! app :cursor #(mod (+ 1 (:cursor @app)) (count (:audio @app))))
                                                                                                   (.log js/console (:cursor @app))
                                                                                                   (play-current-track app))}))
                                                  (om/set-state! owner :ready true)
                                                  (go (<! (timeout 300)) (play-current-track app)))}))
      (go (loop []
            (<! (timeout 300))
            ;; (case (.-playState  (.getSoundById js/soundManager (:id (current-track))))
            ;;   0 (change-state app "paused")
            ;;   1 (case (.-readyState (.getSoundById js/soundManager (:id (current-track))))
            ;;       (0 1 2) (change-state app "initialing")
            ;;       3 (change-state app "playing")))
            (let [css (get state-icon-css (keyword (:state @app)))]
              (om/set-state! owner :icon-css css)
              (recur)))))
    om/IRenderState
    (render-state [this state]
      (dom/div #js {:className (str "player" " " (:player-css state))
                    :onMouseOver (fn [e] (om/set-state! owner :player-css ""))
                    :onMouseOut (fn [e] (om/set-state! owner :player-css "animated fadeOut"))}
               (dom/p nil
                      (dom/i #js {:className (:icon-css state)
                                  :onClick (fn [] (case (:state @app)
                                                    "idle" (do
                                                             (change-state app "loading")
                                                             (play-current-track app)
                                                             (go
                                                               (om/set-state! owner :player-css "animated pulse")
                                                               (<! (timeout 1000))
                                                               (om/set-state! owner :player-css "animated bounceOut")))
                                                    "playing" (do (change-state app "paused")
                                                                  (.pause js/soundManager (:id (current-track))))
                                                    "paused" (do (change-state app "playing")
                                                                 (.play js/soundManager (:id (current-track))))
                                                    nil))})
                      (dom/span nil (:id (current-track))))))))


(defn headmsg [app owner]
  (reify om/IRender
    (render [this]
      (dom/div #js {:id "container" :className (str "container " (get (get (:slide app) (:nth-slide app)) :css "white"))}
               (dom/section nil
                            (dom/header nil
                                         (dom/h1 nil "Engineer")
                                         (dom/h2 nil "Univ of Ottawa, born in China, since 1991"))
                            (dom/div #js {:className "in-slide-content"}
                                     (dom/nav #js {:className "cl-effect-14" :id "cl-effect-14"}
                                              (dom/a #js {:href "http://about.me/zackguo"} "About.Me")
                                              (dom/a #js {:href "/blog/"} "Blog")
                                              (dom/a #js {:href "https://github.com/gizak"} "GitHub")
                                              (dom/a #js {:href "http://gizak-tsuite.appspot.com"} "Appspot"))))))))

(defn bg-view [app owner]
  (reify
    om/IInitState
    (init-state [_] {:text "" :ch (chan) :css ""})
    om/IWillMount
    (will-mount [_]
      (js/$ (fn [] (.vegas js/$ "slideshow" (clj->js {:delay 5500
                                                      :backgrounds (:slide @app-state)
                                                      :preload true
                                                      :loading false
                                                      :walk (fn [s] (put! (om/get-state owner :ch) s))}))))
      ;; (.vegas js/jQuery "overlay")
      (go (loop [] (let [step (<! (om/get-state owner :ch))]
                     (om/transact! app :nth-slide #(identity step))
                     (om/set-state! owner :css "animated fadeOutLeft")
                     (<! (timeout 100))
                     (om/set-state! owner :text (:tag (get (:slide @app) step)))
                     (om/set-state! owner :css "animated fadeInLeft")
                     (recur)))))
    om/IRenderState
    (render-state [this state]
      (dom/p #js {:className (str "bg-info" " " (:css state))} (str "> " (:text state))))))


(om/root
 (fn [app owner] (reify om/IRender
                   (render [_]
                     (dom/div #js {:className "content"}
                              (om/build player-view app)
                              (om/build headmsg app)
                              (om/build bg-view app)))))
 app-state {:target (.getElementById js/document "app")})
