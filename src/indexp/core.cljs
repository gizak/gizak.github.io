(ns indexp.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(def app-state (atom {:slide []
                      :audio [{:url "http://freshly-ground.com/data/audio/sm2/Adrian Glynn - Seven Or Eight Days.mp3"
                               :id "Seven Or Eight Days - Adrian Glynn"
                               :ref "#"}]
                      :cursor 0
                      :state "initialing"}))
