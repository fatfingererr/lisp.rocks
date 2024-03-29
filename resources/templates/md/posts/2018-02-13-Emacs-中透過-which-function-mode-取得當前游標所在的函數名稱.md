    {:title "Emacs 中透過 (which-function) 取得當前函數名稱" :layout :post :tags ["which-func" "emacs" "spacemacs"] :toc false}


# 　


## 　

[Which Func Mode](https://www.emacswiki.org/emacs/WhichFuncMode) 是在 Emacs 中他可以自動幫你對應找出當前游標目前處在的函數名稱

他支援多數主要的語言，中文可見 [Emacs-China 的 hello-emacs 中的說明](https://github.com/emacs-china/hello-emacs/blob/master/Emacs_Redux/which-function-mode.org)

其實很簡單，就是透過 `(which-function)` 即可使用

唯一需要留意的事情，如果你要在自己的 code 裡面使用

你可能有 `(which-function-mode)` 的函數但沒有啟用 `(which-function)`

所以要記得 `(require 'which-func)` 來讀取，否則你無法調用函數

此外 `(which-function)` 也不是 `interactive` 的函數，所以可以自己包一成

    (require 'which-func)
    (defun show-which-function ()
      (interactive)
      (setq which-function-mode t)
      (which-function)
      (setq which-function-mode nil))

應該是 Emacs 原生套件，還不錯用
