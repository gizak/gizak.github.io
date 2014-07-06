build:
	perl -pi -e 's/^url:.*/url: http:\/\/gizak.github.io/' _blogsrc/_config.yml
	cd _blogsrc && jekyll build --destination ../blog

serve:
	perl -pi -e 's/^url:.*/url: http:\/\/localhost:4000/' _blogsrc/_config.yml
	cd _blogsrc && jekyll build --destination="../blog" --drafts
	python -m SimpleHTTPServer 4000

install:
	git add --all
	git commit -m "Auto update"
	git push
