    {:title "Emacs 中使用 popup-tip 彈出自訂內容" :layout :post :tags ["emacs" "popup-tip"] :toc false}


# 　


## 　

由於看到了 [Popup Help In Emacs Lisp](http://blog.jenkster.com/2013/12/popup-help-in-emacs-lisp.html) 這篇文章，想要來自訂 popup-tip

其實函數十分簡單，文章的方法就夠用了，但我想要從自訂的檔案內容讀取出來

因為檔案可能搜尋不到，所以多了一行 message

    (defun fatfingererr/coding-dict-at-point ()
      (interactive)
      (let* ((content (fatfingererr/search-in-dict
                       "coding" (thing-at-point 'word))))
        (if content
            (popup-tip content
                       :point (point)
                       :around t
                       :height 30
                       :scroll-bar t
                       :margin t)
          (message "no match result..."))))

其中因為我建立了一個字典資料夾，放在 `~/.spacemacs.d/dictionary` 中

裡面我弄了一個 `coding` 的資料夾，當作 coding 相關的字典檔案夾

也就是我只要目前游標停留在 `if` 他就會去找 `~/.spacemacs.d/dictionary/coding/if`

然後把檔案內容彈跳出來，例如一個提醒我寫 if 的內容：

    # ~/.spacemacs.d/dictionary/coding/if

    【 if/else 條件語句 】

    迴圈循環子可考慮寫成 club_i, members_i, users_i
    或是 ci, mi, ui

所以我首先得先確定游標內容有沒有對應的檔案在字典資料夾裡面

    (defun fatfingererr/search-in-dict-p (dict-name src)
      (if src (xah-string-match-in-list-p src
        (directory-files
         (expand-file-name dict-name my-dict-path)) nil)
      nil)
    )

這邊我使用到 [xah-string-match-in-list-p](http://ergoemacs.org/emacs/elisp_string_match_in_list.html) 函數，可以到連結裡面直接複製貼上

唯一要留意的就是使用這個函數，第三個參數要記得放，也就是 `match-case-p`

接著我們確認完畢檔案存在，就開始把檔案內容讀出來

    (defun fatfingererr/search-in-dict (dict-name src)
      (if (fatfingererr/search-in-dict-p dict-name src)
          (with-temp-buffer
          (insert-file-contents (expand-file-name
           (fatfingererr/search-in-dict-p dict-name src)
           (expand-file-name dict-name my-dict-path)))
          (buffer-string))
        nil)
      )

結果就會是這樣啦！還不錯！

![img](c:/search-in-dict-example.gif)


## 參考資料

1.  [Popup Help In Emacs Lisp](http://blog.jenkster.com/2013/12/popup-help-in-emacs-lisp.html)
