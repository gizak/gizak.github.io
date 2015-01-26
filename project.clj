(defproject indexp "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-alpha5"]
                 [org.clojure/clojurescript "0.0-2665"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.om/om "0.8.0"]
                 [prismatic/om-tools "0.3.10"]
                 [org.clojure/tools.cli "0.3.1"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [cider/cider-nrepl "0.9.0-SNAPSHOT"]]

  :profiles {:dev {:plugins [[com.cemerick/austin "0.1.6"]]}}

  :source-paths ["src/inedx"]

  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src/index"]
              :compiler {:output-to "test/cljs/index.js"
                         :output-dir "test/cljs"
                         :optimizations :none
                         :source-map true}}
             {:id "prod"
              :source-paths ["src/index"]
              :compiler {:output-to "build/js/build.js"
                         :optimizations :advanced
                         :externs ["build/js/jquery-1.12.2.min.js"
                                   "build/js/react-0.12.2.min.js"]
                         :pretty-print false}}]})
