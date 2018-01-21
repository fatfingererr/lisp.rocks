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

例如（請把 `#` 換成 `*` ）

    # Emacs                                                              :elfeed:
    ## http://ergoemacs.org/emacs/blog.xml
    ## http://planet.emacsen.org/atom.xml
    ## http://nullprogram.com/feed

這邊要特別留意的是，第一個開頭一定要是 `* 某開頭          :elfeed:` 這樣

這樣 elfeed 才會認知到你的 feed ，如果你在額外弄一個一級標題但沒有 `elfeed` 的 tag

就不會被當作是 elfeed 的 feed ，記得使用 `C-c C-q` 打上 tags

此外，如果不知道自己有沒有新增成功，可以透過指令 `elfeed-org-export-opml` 來看

如果裡面沒有新增的 RSS，就代表你 org file 沒弄好


## 參考資料

1.  [remyhonig/elfeed - An Emacs web feeds client](https://github.com/remyhonig/elfeed:)
2.  [remyhonig/elfeed-org - Configure the Elfeed RSS reader with an Orgmode file](https://github.com/remyhonig/elfeed-org)
