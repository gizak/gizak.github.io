.PHONY: test build blog

test:
	lein cljsbuild once test

blog:
	cd src/blog/ && hugo --theme=nofancy -d ../../build/blog

index:
	lein cljsbuild once prod
