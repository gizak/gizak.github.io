(defproject indexp "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [org.clojure/core.async "0.1.303.0-886421-alpha"]
                 [om "0.6.5"]]

  :plugins [[lein-cljsbuild "1.0.3"]]

  :source-paths ["src/inedxp"]

  :cljsbuild {
    :builds [{:id "test"
              :source-paths ["src/indexp"]
              :compiler {
                :output-to "test/cljs/indexp.js"
                :output-dir "test/cljs"
                :optimizations :none
                :source-map true}}]})
