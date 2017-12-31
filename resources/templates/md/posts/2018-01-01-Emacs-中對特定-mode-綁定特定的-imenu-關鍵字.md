    {:title "Emacs 中對特定 mode 綁定自訂 imenu 匹配" :layout :post :tags ["emacs" "spacemacs" "imenu"] :toc false}


# 　　


## 　

在寫程式的時候大家或多或少都有自己的習慣

例如註解有些特殊寫法、或是控制流程和命名會有特殊的習慣

一般的 imenu 只能做到很細的在例如 if/else , for-loop , switch 間跳轉

<br>

如果要在一些註解、或是變數宣告間跳轉，這種比較高階的匹配可以自訂 imenu

只需要 hook 住特定 mode 就可以了

例如我想在 octave-mode (也就是 Matlab mode) 綁定基本控制流程可以用：

    (add-hook 'octave-mode-hook
              (lambda ()
                (setq imenu-generic-expression
                      '(("for-loop" "^for *\\(.*\\)" 1)
                        ("if-else" "^if *\\(.*\\)" 1)
                        ("switch" "^switch *\\(.*\\)" 1)
                        ))))

<br>

也就是說，通用的格式如下：

    (add-hook '[某某-mode]-hook
              (lambda ()
                (setq imenu-generic-expression
                      '(("[標題 1]" "[正則表達式 1]" 1)
                        ("[標題 2]" "[正則表達式 2]" 1)
                        ("[標題 3]" "[正則表達式 3]" 1)
                        ))))

如果要更細緻地操作正則表達式，可以調整後面的數字來匹配 subexpression，基本可以用 1

如果要從頭匹配請用 `^` 開頭，詳細請參考上方範例

<br>


### 參考資料

-   [GNU Emacs - 22.5 Imenu](https://www.gnu.org/software/emacs/manual/html_node/elisp/Imenu.html)
