build:
	perl -pi -e 's/^url:.*/url: http:\/\/gizak.github.io/' src/blog/_config.yml
	cd src/blog && jekyll build --destination ../../build/blog
	lein cljsbuild clean prod
	lein cljsbuild once prod 2>/dev/null
	mv build/js/build.js build/js/_build.js
	cd build/js && cat jquery-1.10.2.min.js jquery.vegas.min.js react-0.10.0.min.js sm/script/soundmanager2.js _build.js > build.js
	rm build/js/_build.js
	cd build && python -m SimpleHTTPServer 4000

serve:
	lein cljsbuild auto test &
	perl -pi -e 's/^url:.*/url: http:\/\/localhost:4000/' src/blog/_config.yml
	cd src/blog && jekyll build --destination="../../test/blog" --drafts
	cd test && python -m SimpleHTTPServer 4000

install:
	git add --all
	git commit -m "Task Auto Update ->source"
	git push
	cd build && git commit -a -m "Task Auto Update ->master" && git push

.PHONY: build
