    {:title "Spacemacs快速查找layer的定義並修改" :layout :post :tags ["spacemacs"] :toc false}


# 　


## 　

為了解決 [Symbol’s function definition is void: org-projectile:per-repo](https://emacs-china.org/t/topic/4353) 的問題

需要去到 `org-projectile` 中修改套件的定義，使用到一個少用的功能，特此留作紀錄

也就是 key `M-m h SPC` 可以快速查找目前載入的套件的 el 檔案

在本 bug 中需要到 `org-projectile` 把 `(org-projectile)` 註釋掉

進入檔案中透過 `C-s` 搜尋修改即可

這樣就可以繼續使用 `org-capture (C-c c)` 了!

此 bug 似乎是 `org-projectile` 的問題，暫且不深究了&#x2026;
