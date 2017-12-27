    {:title "在 Emacs 中安靜地執行 async-shell-command" :layout :post :tags [""] :toc false}


# 


## 

安靜地在 Emacs 中執行 async-shell-command 有兩種方式：


### display-buffer-alist (不推)

如果你想要對所有的 `async-shell-command` 都安靜執行，可以透過：

    (add-to-list 'display-buffer-alist
      '("\\*Async Shell Command\\*.*" display-buffer-no-window))

在 Spacemacs 中可以加入在 `dotspacemacs/user-config` 中

缺點是所有的 async shell command 都會被安靜執行，有時候有些 async shell command 我們還是希望跳出視窗提醒

例如執行一些執行 local server 的 command ，不然再開一個可能會開新的 port 所以我推薦第二個方法


### call-process-shell-command

使用 `call-process-shell-command` 要留意指令後需要添加 `nil 0` 參數：

    (call-process-shell-command
        (async-shell-command 
            ... ;; 做你想做的事情 
           ) nil 0)

這種方式對個別 async-shell-command 可以分別操作

