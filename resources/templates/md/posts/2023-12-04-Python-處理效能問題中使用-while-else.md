    {:title "Python 處理效能問題中使用 while/else" :layout :post :tags ["python", "performance"] :toc false}


# 　

![img](../../img/not-by-ai/tw/written-by-human/svg/Written-By-Human-Not-By-AI-Badge-white.svg)


## 使用情景

由於經常得處理 Python 效能的追求與改善，少不了的就是：

1.  起 Thread 跑 While loop 監聽

2.  起一堆 While loop 對同一個 Queue `get()` ，來大量阻塞和消化不斷湧入到 Queue 的資料

3.  `while xxxx.isAlive()` 卡檔案或第三方 Context/Client 處理 I/O 問題

無論是哪個，都免不了 `While <condition>:` 中的 condition 可能會出錯，通常就得用 `if/else` 打補丁

但是 Python 有一個很獨門的語法，在其他語言中少見的就是 `while/else`, `for/else` ，可以讓 Code 更簡潔


## 以登入為例

以登入來說，由於受限於第三方回傳登入成功，需要 While loop 等待：

    start_login()
    while is_logging_in:
        if is_logged_in:
            print("Successfully logged in!")
            break

而在登入函數中，會設置 `is_logged_in` 來觸發進到前面 while loop 中的 if break：

    import time
    
    is_logging_in = False
    is_logged_in = False
    
    def start_login():
        global is_logging_in, is_logged_in
        print("Logging in...")
        is_logging_in = True
        time.sleep(3) # 模擬等 3 秒成功登入
        is_logged_in = True

假如我們考慮登入失敗：

    def fail_to_login():
        global is_logging_in, is_logged_in
        print("Logging in...")
        is_logging_in = True
        time.sleep(3) # 模擬等 3 秒失敗登入
        is_logging_in = False

那我們就可以使用 `while/else` 來處理，而不需要再兩三行的 `if/else` ：

    fail_to_login()
    while is_logging_in:
        if is_logged_in:
            is_logging_in = False
            print("Successfully logged in!")
            break
    else:　　　　　　　　　　　　　　 # <---- while/else
           print("Failed to log in!") # <---- while/else

除此之外也可以使用 `for/else` 處理經常需要遍歷資料，但是遍歷後沒有找到的情況。

