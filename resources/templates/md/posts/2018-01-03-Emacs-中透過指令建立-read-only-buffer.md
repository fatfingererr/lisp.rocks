    {:title "Emacs 中透過指令建立 read-only buffer" :layout :post :tags [""] :toc false}


# 　


## 　

有時候執行一些指令希望把結果訊息用 popup-window 顯示出來

這時候可以透過 insert 訊息到 buffer 之後轉 special-mode

這樣看完就可以透過 `q` 退出 buffer 回到原本的 buffer

假設我們要 insert 紀錄的 log 檔案的話，可以使用：

    (let ((new (get-buffer-create 暫時的buffer名稱))
          (current (current-buffer)))
         (switch-to-buffer new)
         (insert-file-contents log檔案路徑)
         (special-mode))

暫時的 buffer 名稱可以用 `*buffer-name*` 表示

在把資訊 insert 到 buffer 後，透過 `(special-mode)` 轉成 read-only 即可
