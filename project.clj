(defproject gio "0.1.0"
  :description "gizak personal website"
  :url "http://gizak.github.io"

  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/clojurescript "0.0-3196"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.8"]
                 [prismatic/om-tools "0.3.11"]
                 [org.clojure/tools.cli "0.3.1"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [cider/cider-nrepl "0.9.0-SNAPSHOT"]]

  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.6"]]}}

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src"]
              :compiler {:output-to "test/cljs/index.js"
                         :output-dir "test/cljs"
                         :optimizations :none
                         :source-map true}}
             {:id "prod"
              :source-paths ["src"]
              :compiler {:output-to "build/js/build.js"
                         :optimizations :advanced
                         :externs ["build/js/jquery-1.12.2.min.js"
                                   "build/js/react-0.12.2.min.js"]
                         :pretty-print false}}]})
