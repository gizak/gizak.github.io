(set-env!
  :source-paths    #{"src" "inc"}
  :resource-paths  #{"html"}
  :target-path "build"
  :dependencies '[[adzerk/boot-cljs "0.0-2814-4"]
                  [adzerk/boot-cljs-repl  "0.1.9"]
                  [adzerk/boot-reload     "0.2.6"]
                  [org.clojure/clojure "1.7.0-beta1"]
                  [org.clojure/clojurescript "0.0-3196"]
                  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                  [org.omcljs/om "0.8.8"]
                  [prismatic/om-tools "0.3.11"]
                  [org.clojure/tools.cli "0.3.1"]])

(require
  '[adzerk.boot-cljs      :refer [cljs]]
  '[adzerk.boot-cljs-repl :refer [cljs-repl]]
  '[adzerk.boot-reload    :refer [reload]])

(deftask gh
  "Push to github page"
  []
  (dosh "sh" "push.sh" "Rebuild"))


(deftask prod
  "Product build"
  []
  (comp (cljs :unified true
              :optimizations :advanced
              :no-warnings true
              :output-to "js/build.js"
              :output-dir "cljs"
              :pretty-print false)))

(deftask dev
  "Build cljs example for development."
  []
  (comp (watch)
        (speak)
        (cljs-repl)
        (cljs :unified true
              :source-map true
              :optimizations :none)
        (reload)))
