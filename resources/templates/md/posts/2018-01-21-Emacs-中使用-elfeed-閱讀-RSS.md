    {:title "Emacs 中使用 elfeed 閱讀 RSS" :layout :post :tags ["emacs" "elfeed" "elfeed-org"] :toc false}


# 　


## 　

一直想從 feedly 搬到 Emacs 中，趁著有空來研究 elfeed

基本上在 Spacemacs 中預設就有 elfeed 以及用 org 管理 rss list 的 elfeed-org

我使用的方法是用 eval-after-load

    (eval-after-load 'elfeed
      (lambda ()
        (elfeed-org)
        (setq rmh-elfeed-org-files (list "~/.spacemacs.d/rss/elfeed.org"))))

然後在你的 org 檔案裡面就可以依序放入 RSS list

例如

\#+BEGIN<sub>SRC</sub>


# Emacs     :elfeed:


## <http://ergoemacs.org/emacs/blog.xml>


## <http://planet.emacsen.org/atom.xml>


## <http://nullprogram.com/feed>

\#+END<sub>SRC</sub>


## 參考資料

1.  [remyhonig/elfeed - An Emacs web feeds client](https://github.com/remyhonig/elfeed:)
2.  [remyhonig/elfeed-org - Configure the Elfeed RSS reader with an Orgmode file](https://github.com/remyhonig/elfeed-org)
