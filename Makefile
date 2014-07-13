build:
	perl -pi -e 's/^url:.*/url: http:\/\/gizak.github.io/' src/blog/_config.yml
	cd src/blog && jekyll build --destination ../blog

serve:
	lein cljsbuild once test
	perl -pi -e 's/^url:.*/url: http:\/\/localhost:4000/' src/blog/_config.yml
	cd src/blog && jekyll build --destination="../../test/blog" --drafts
	cd test && python -m SimpleHTTPServer 4000

install:
	git add --all
	git commit -m "Auto update"
	git push
