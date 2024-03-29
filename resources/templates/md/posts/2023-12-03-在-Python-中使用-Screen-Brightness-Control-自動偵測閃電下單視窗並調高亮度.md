    {:title "在 Python 中自動偵測閃電下單視窗，並調高亮度" :layout :post :tags ["python" "trading" "win32gui"] :toc false}


# 　

![img](../../img/not-by-ai/tw/written-by-human/svg/Written-By-Human-Not-By-AI-Badge-white.svg)


## Python 套件 `screen_brightness_control`

在 Python 中透過亮度控制套件 ([GitHub](https://github.com/Crozzers/screen_brightness_control)) 可以設定並取得螢幕亮度：

    import screen_brightness_control as sbc
    
    # get the brightness
    brightness = sbc.get_brightness()
    # get the brightness for the primary monitor
    primary = sbc.get_brightness(display=0)

<br/>


## 自動偵測視窗並調整亮度

由於做交易時會有許多顯示器，亮度可以設置成全亮的 80-90%

然後可以設置成當該顯示器打開的視窗發生重要事件時，將亮度調高到 100% 提醒自己

這邊以 "閃電下單" 為例, 閃電下單視窗名稱是 "閃電下單 1", "閃電下單 2" &#x2026; 等，匹配名字即可：

    import time
    import screen_brightness_control as sbc
    import win32gui
    
    # Inputs
    programName = "閃電下單"
    defaultBrightness = 90 # 預設亮度, 80-90%
    targetBrightness = 100 # 當打開閃電下單, 亮度調亮吸引注意力
    
    # Program
    pid = None
    lastCheck = time.time()
    printPerSec = 15
    while True:
        monitors = sbc.list_monitors("wmi")
        hwnd = win32gui.GetForegroundWindow()
        title = win32gui.GetWindowText(hwnd)
        if time.time() >= lastCheck:
            lastCheck += printPerSec
            print(f"當前視窗: {title} (顯示器={monitors})")
        if programName in title and pid is None:
            print(f"將 '{title}' 所在顯示器的螢幕亮度，調整成 "+str(targetBrightness))
            sbc.fade_brightness(targetBrightness, display=monitors[0])
            if pid is None:
                pid = hwnd
        else:
            prevBrightness = sbc.get_brightness(display=monitors[0])[0]
            if prevBrightness == targetBrightness and not programName in title:
                print(f"將 '{title}' 所在顯示器的螢幕亮度，恢復到預設值 "+str(defaultBrightness))
                sbc.fade_brightness(defaultBrightness, display=monitors[0])
                pid = None
        time.sleep(1)

