+++
date = "2014-01-25T11:35:07-05:00"
draft = false
title = "Emacser's guide: set up your osx like a BOSS"
categories = ["Emacs","HowTo"]
tags = ["osx"]
+++

_This is a "LTS" list of suggested tools(developer-leaning) runing on OS X based on my personal experiences, you can consider it as a starter tool kit for new machines and systems._

### Basic Principles

1. _Less is more._ Consider the OS X's builtin functionalities at first!
2. A good package manager saves your ass.
3. CLI is better than GUI from time to time.

### Starting Off

0. Install __Xcode Command Line Tools__: `xcode-select --install`.
Acutally install the Xcode GUI program is unnecessary if you are not a iOS or OSX developer since all other dev tools depend on Command Line Tools, not the Xcode GUI IDE.
1. Install __brew__: [brew.sh](http://brew.sh) (the most popular OS X packages manager). Then `brew doctor`.

### Emacs
Install _pure Emacs_ from [emacsformacosx.com](http://emacsformacosx.com). This is so far the best version running on osx comparing with others(e.g. Aquamacs). The goodies of using pure Emacs is let you take full control of everything and have the best compatibility.

Here is my [dotEmacs](https://gist.github.com/gizak/272ab7a66f74e0315eea)!

__Package for Packages__

_First of all, add melpa repo to Emacs_:

```
(require 'package)
(add-to-list 'package-archives
  '("melpa" . "http://melpa.milkbox.net/packages/") t)
(package-initialize)
(add-to-list 'load-path "~/.emacs.d/site-lisp")    ; This may not be appeared if you have already added.
```

__Basic Packages__

0. auto-complete
1. base16-theme
2. ecb
3. flycheck
4. magit
5. rainbow-delimiters
6. yasnippet
7. ido
8. smex
9. volatile-highlight-mode
10. markdown-mode
11. yaml-mode
12. color-theme

__Javascript Packages__

1. js3-mode
2. json-mode

__Go Packages__

1. go-autocomplete
2. go-mode
3. go-lint
4. go-eldoc
5. go-direx (optinal)
5. go-errcheck(optional)

Needed Go packages:

1. [gocode](https://github.com/nsf/gocode) (go-autocomplete, go-eldoc)
2. [lint](https://github.com/golang/lint) (go-lint)
3. [errcheck](https://github.com/kisielk/errcheck) (go-errcheck)
4. [gotags](https://github.com/jstemmer/gotags)  (go-direx)

__Clojure and ClojureScript__

1. clojure-mode
2. cider
3. pretty-symbols
4. ac-nrepl
5. paredit

__Others__

1. ess (R programming)
2. auctex (writing Tex)
3. linum-relative (kinda cool)
4. 2048-game
5. git-gutter, git-gutter-fringe, fringe-helper

__Dict and Spelling Checker__

To work with flyspell-mode in Emacs I recommend using _hunspell_ (which is the default checker in OS X) to replace default ispell:

```
;; now hunspell replaced ispell
(setq ispell-program-name "hunspell"
      ispell-local-dictionary "en_CA"
      ispell-skip-html t
      ispell-local-dictionary-alist
      '(("en_CA" "\[\[:alpha:\]\]" "[^[:alpha:]]" "[']" nil ("-d" "en_CA") nil utf-8)))
(setq ispell-dictionary "en_CA")

(add-hook 'markdown-mode-hook 'flyspell-mode) ;; for markdown-mode
(add-hook 'org-mode-hook 'flyspell-mode) ;; for org-mode
```


Download hunspell at [sourceforge](http://hunspell.sourceforge.net)

Then download en dictionaries to /Library/Spelling :

US:
[en_US.aff](http://cgit.freedesktop.org/libreoffice/dictionaries/plain/en/en_US.aff)
[en_US.dic](http://cgit.freedesktop.org/libreoffice/dictionaries/plain/en/en_US.dic)

CA:
[en_CA.aff](http://cgit.freedesktop.org/libreoffice/dictionaries/plain/en/en_CA.aff)
[en_CA.dic](http://cgit.freedesktop.org/libreoffice/dictionaries/plain/en/en_CA.dic)

### Other Dev Tools

[Dash.app](http://kapeli.com/dash): Dash gives your Mac instant offline access to 150+ API documentation sets.

[Google Chrome](https://www.google.com/chrome/?): Sometimes Safari is not enough.

[Github for Mac](https://mac.github.com): Easiest way to use Github on Mac.

[Light Table](http://lighttable.com): A promising ClojureScript powered IDE, especially for Clojure, ClojureScript and Javascript developing.

[Slack](https://slack.com): Team communicating, a better way than emails.

[Visual Paradiam CE](http://www.visual-paradigm.com/download/community.jsp): Literally I do not like UML at all...

### Multimedia and Others

[MPlayerX](http://mplayerx.org): The recent versions are off Apple App Store, so do not install it from App Store.

[MacTex](https://tug.org/mactex/): tex live on Mac.

[Pages.app](https://www.apple.com/ca/mac/pages/): Only recommend for quick dirty writing!

Mail.app: Every email app sucks, so let us just use the built-in app.

[uTorrent](http://www.utorrent.com/?us): The popular torrent client.

Dictionary.app: I don't see any needs to install a third-party dictionary. If it's not enough, go online!

### Conclusion

Do not turn you Mac into a mess! Install things only when you need it! [@Gizak](mailto:gizak@icloud.com)
