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
              :compiler {:output-to "test/cljs/indexp.js"
                         :output-dir "test/cljs"
                         :optimizations :none
                         :source-map true}}
             {:id "prod"
              :source-paths ["src/indexp"]
              :compiler {:output-to "build/js/build.js"
                         :optimizations :advanced
                         ;; :foreign-libs [{:file "test/js/jquery-1.10.2.min.js"
                         ;;                 :provides ["$" "jQuery"]}
                         ;;                {:file "test/js/react-0.10.0.min.js"
                         ;;                 :provides ["React"]}
                         ;;                {:file "test/js/jquery.vegas.min.js"
                         ;;                 :provides ["$.vegas" "jQuery.vegas"]}
                         ;;                {:file "test/js/sm/script/soundmanager2-nodebug-jsmin.js"
                         ;;                 :provides ["soundManager"]}]
                         :externs ["build/js/jquery-1.10.2.min.js"
                                   "build/js/react-0.10.0.min.js"
                                   "build/js/jquery.vegas.min.js"
                                   "build/js/sm/script/soundmanager2-nodebug-jsmin.js"]
                         :pretty-print false}}]})
