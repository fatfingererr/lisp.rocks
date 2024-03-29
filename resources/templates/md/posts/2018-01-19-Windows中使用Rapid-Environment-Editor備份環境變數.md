    {:title "使用 Rapid Environment Editor 備份環境變數" :layout :post :tags ["windows" "backup"] :toc false}


# 　


## 　

之前一直想要備份 Windows 的環境變數，然後找到一個好用的軟體 [Rapid Environment Editor](https://www.rapidee.com/en/download)

這個軟體能備份和幫忙檢查有哪些環境變數是無效的

無效的環境變數會以紅色顯示，其中語言也有簡體中文版本，對 Windows 不熟也可以使用

所有變更只有在儲存之後才會真的變更，也不用擔心亂改改錯

備份的部分存成 `.reg` 檔案，可以再把它讀取回來

內容就像是

<br>

    ; System variables
    ...
    [HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Session Manager\Environment]
    "CCP_JOBTEMPLATE"="Default"
    "CCP_LOGROOT_USR"=hex(2):25,4C,4F,43,41,4C,41,50,50,44,41,54,41,25,5C,4D,69,63,72,6F,73,6F,66,74,5C,48,70,63,5C,4C,6F,67,46,69,6C,65,73,5C,00
    "ChocolateyInstall"="C:\\ProgramData\\chocolatey"
    "ComSpec"=hex(2):25,53,79,73,74,65,6D,52,6F,6F,74,25,5C,73,79,73,74,65,6D,33,32,5C,63,6D,64,2E,65,78,65,00
    "CUDA_PATH"="C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0"
    "CUDA_PATH_V8_0"="C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v8.0"
    "DokanLibrary1"="C:\\Program Files\\Dokan\\Dokan Library-1.0.0\\"
    "GNUPLOT_LIB"="C:\\Program Files\\gnuplot\\demo;C:\\Program Files\\gnuplot\\demo\\games;C:\\Program Files\\gnuplot\\share"
    "GNUTERM"="windows"
    ...

其中蠻有趣的是部分會用 `hex` 來表示，不知道那是什麼意思&#x2026;


## 參考資料

1.  [{分享} Rapid Environment Editor - 方便修改環境變數的工具](http://nelson.pixnet.net/blog/post/22360384-%5B%E5%88%86%E4%BA%AB%5D-rapid-environment-editor---%E6%96%B9%E4%BE%BF%E4%BF%AE%E6%94%B9%E7%92%B0%E5%A2%83%E8%AE%8A%E6%95%B8)
2.  [【Windows】環境變數管理工具：Rapid Environment Editor](https://dotblogs.com.tw/echo/2017/07/13/windows_tool_rapidenvironmenteditor)
