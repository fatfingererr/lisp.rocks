    {:title "在 Emacs 中使用 counsel-gtags" :layout :post :tags ["emacs", "gtags", "counsel"] :toc false}


# 


## 


## 建立 GTAG 檔案

首先你得先透過 `counsel-gtags-create-tags` 來在根目錄建立 GTAGS 檔案

可能會花一點時間，這時 GTAGS 檔案可能是空的，不要緊張

建立完畢後就能使用 `counsel-gtags-find-definition` 

在游標處立即對該游標前的函數定義處進行跳轉

我個人是把他綁定到 `M-t` 方便快速跳轉到函數定義位置

