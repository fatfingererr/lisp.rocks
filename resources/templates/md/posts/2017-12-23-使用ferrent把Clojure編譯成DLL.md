{:title "使用 Ferrent 將 Clojure code 編譯成 DLL"
 :layout :post
 :tags  ["clojure" "dll" "ferrent"]
 :toc false}

> 本文處理的 Clojure code 是指僅依賴 Clojure 基本語法的程式碼

<br>
## 下載 Ferrent
<hr>

首先先到 [Ferrent](https://ferret-lang.org) 抓 [ferret.jar](https://ferret-lang.org/builds/ferret.jar) ，使用下載的 jar 就可以對個別的 clj 轉換成 C++ 程式碼

<br>
## 撰寫 simple.clj
<hr>

我們先寫一個使用到 Clojure 數學函式庫的函數，舉例來說，自訂一個波的函數：

務必使用【<b>main</b>】做主函數，否則後面會無法編成 C++ ，儘管我們只是要做 DLL

<div class="language-klipse">
```eval-clojure
;; my-wave.clj

(defn main
  "3 cosθ + 2 sin(θ-π)"
  [theta]
  (+ (* (Math/cos theta) 3) (* 2 (Math/sin (- theta Math/PI)))))

(println (main (/ Math/PI 4)))
```
</div><br>

我們可以在 Clojure 中調用 my-wave 函數來使用：

<div class="language-klipse">
```eval-clojure
(main (/ Math/PI 4))
```
</div><br>

假如我們把 my-wave.clj 與 ferret.jar 放在一起，在一個資料夾底下：
```bash
dir
# 2017-10-17  02:28         5,325,127 ferret.jar
# 2017-12-24  16:07               163 my-wave.clj
```

接著我們透過 java 指令將 clj 轉成 c++ 檔案：
```bash
java -jar ferret.jar -i my-wave.clj
```





<br>
<br>
<br>
<br>
<br>
<br>