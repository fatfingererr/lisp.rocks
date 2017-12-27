    {:title "Emacs中處理Windows路徑轉換" :layout :post :tags [""] :toc false}


# 


## 

在 Windows 中使用 Emacs 時，處理路徑轉換很麻煩，因為你從各種函數中拿到的路徑可能會有：

1 . 像是 Linux 系統中的路徑，例如 `~/.spacemacs.d/`

2 . 像是 Windows 系統中的路徑，例如 `c:\ \ Users \ \ myName` ( Spacemacs 默認 =c: \\ \\ = 是小寫 )

3 . 又或是兩者的混合版本，例如 `c:/Users/myName` ，這種最麻煩

<br>

這樣在背景執行例如 `async-shell-command` 就會很不方便

所以通常就得在外面再包一層把路徑換掉的函數，使用的方法可以用：

    (replace-regexp-in-string "\/" "\\\\" path)

或是：

    (replace-regexp-in-string "/" (regexp-quote "\\") path)

這樣就沒問題了，搭配 `projectile-project-root` 就能輕鬆在跟目錄下執行 bat scripts ！

