    {:title "Emacs中使用eval-after-load避免使用尚未載入套件的函數" :layout :post :tags ["emacs" "spacemacs" "projectile"] :toc false}


# 　


## 　

今天因為要處理這個問題：

[Symbol's function definition is void: org-projectile-per-project #9374](https://github.com/syl20bnr/spacemacs/issues/9374)

結果把 org-projectile 砍掉重新安裝

安裝的時候發現因為我定義的函數，有使用到 `projectile-project-root` 但是套件又被我砍掉

結果就是安裝完套件我還是初始化失敗，因為我的 layer 使用到為定義的函數

因此安全起見，應該要把自訂函數有使用到套件功能的部分，在套件讀取後再定義

也就是要使用 `eval-after-load` 的功能

使用方法如下，例如：

    (eval-after-load 'org-projectile ;; 在讀取 org-projectile 後執行
      (progn
        ....
        ....
        (concat (projectile-project-root) .... ) ;; 使用到 projectile-project-root
        ...
      )
    )

可以使用 `progn` 指令組合多組語句，可以在其中 `defun` 或 `define-key`

<br>


## 參考資料

1.  [用eval-after-load避免不必要的elisp包的加载](http://emacser.com/eval-after-load.htm)
