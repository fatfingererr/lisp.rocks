    {:title "Windows中使用Spacemacs和clang-format" :layout :post :tags ["windows" "emacs" "spacemacs" "projectile" "clang-format"] :toc false}


# 　


## 　

目前對於 clang-format 還沒有很深刻的理解

簡單只是為了把 c++ code 對齊和整理

首先到 clang-format 網站去下載，搜尋 LLVM Download Page

下載位置: [http://releases.llvm.org/download.html](http://releases.llvm.org/download.html)

<br>
點選 Pre-Built Binaries 中的 Clang for Windows (32-bits) 或 (64-bits)

其中 64-bit 網址在此 <http://releases.llvm.org/5.0.1/LLVM-5.0.1-win64.exe>

安裝完記得將 emacs 重新開啟，相關的 terminal 也要重開（才有新的環境變數 ）

接著在 spacemacs 中你引入 C/C++ 套件的位置改成

    dotspacemacs-configuration-layers
    '(
      ...
      (c-c++ :variables c-c++-enable-clang-support t) ;; 改成這樣
      ...

<br>

接著重新讀取，使用指令 `sync-configuration-layers` 或是指令 `M-m f e R`

並進入你的 c++ 檔案，使用 `clang-format-buffer` 對整個 buffer 做 formatting

或是 `clang-format-region` 對選取區域做 formatting

剛開始可以先使用 `clang-format-region` 避免 buffer 檔案太大造成 Spacemacs 當機一會兒

<br>


## 使用 .clang-format 自訂設置

如果你有使用 `projectile` 的話，可以在你專案的根目錄（可以用 `prjectile-project-info` 查看）

中新增檔案 `.clang-format` 來設定你的 clang-format

沒使用 `projectile` 則是得在檔案位置路徑有 `.clang-format` 檔案

如果你不知道 clang-format 要設定什麼

可以先在 command-line 或是 Spacemacs 中使用 shell 執行

    clang-format -style=llvm -dump-config > .clang-format

<br>

裡面影響比較大主要是行數限制，預設是 80 ，可以調整成 127 或更大

網路上寫 0 也沒用還是會算 80 我沒有試過

    ColumnLimit: 127

<br>

關於其他配置從 [代码格式化插件教程与配置](https://github.com/leejayID/ClangFormat) 貼過來如下（只留下個人在意的部分）：


    # 基礎樣式
    BasedOnStyle: LLVM
    #
    # 縮排寬度
    IndentWidth: 4
    #
    # 大括號的換行模式(Attach，Stroustrup, Allman-所有大括號都換一行)
    BreakBeforeBraces: Allman
    #
    # 是否支持單行的if
    AllowShortIfStatementsOnASingleLine: false
    #
    # 是否允許單行迴圈
    AllowShortLoopsOnASingleLine: false
    #
    # Switch 中的 Case 是否進行縮排
    IndentCaseLabels: true
    #
    # 每行字元的位置，0 為不限制
    ColumnLimit: 0
    #
    # 註釋對齊
    AlignTrailingComments: true
    #
    # 括號後面加空格
    SpaceAfterCStyleCast: true
    #
    # 不在小括號裡面加空格
    SpacesInParentheses: false
    #
    # 不在中括號裡面加空格
    SpacesInSquareBrackets: false
    #
    # 指針對準
    DerivePointerAlignment: true
    #
    # @[]裡面兩邊的空格，預設為true
    SpacesInContainerLiterals: false
    #
    # 賦值前(=)的空格 預設為true
    SpaceBeforeAssignmentOperators: true
    #
    # 指針的位置
    PointerAlignment: Right
    #
    # 最大空的行數
    MaxEmptyLinesToKeep: 1

<br>


## 參考資料

1.  [目前在用的 clang-format 格式 - 星野的 iOS 補(不)完計畫](http://shoshino21.logdown.com/posts/448026-currently-in-clang-format-format)
2.  [代码格式化插件教程与配置 - leejayID/ClangFormat](https://github.com/leejayID/ClangFormat)
