    {:title "使用 SimpleNamespace 分類管理券商 API 錯誤碼" :layout :post :tags ["python" "api"] :toc false}


# 　


## 券商錯誤碼

券商 API 錯誤碼通常是扁平（flat）的，也就是錯誤碼不會分類。

假設我們有以下券商錯誤碼，我們可能很自然使用 `dict` 管理 mapping：

    mapping = {
        1001: "登入失敗，請由LOG查看失敗原因。",
        1002: "交易帳號不存在。",
        1003: "下單帳號類型不正確，是否有證券帳號下期貨之情行。",
        1004: "PERIOD 超出選擇範圍。",
        1005: "FLAG 超出選擇範圍。",
        1006: "BUYSELL 超出選擇範圍。",
        1007: "下單主機不存在。",
        1009: "TRADE TYPE 超出選擇範圍。",
        1010: "DAY TRADE超出選擇範圍。",
    }

但是我們在使用的時候，是希望登入相關拋出 LoginFailError 然後觸發重新登入操作

而委託相關的 Error，應該拋出 OrderInvalidError 觸發重新設置參數的操作

也就是說，針對不同 Error Code 可能要有不同行為


## 使用 `SimpleNamespace`

如果要將 Error Code 分類管理，能使用 `SimpleNamespace` ：

    from types import SimpleNamespace
    
    class InSet(set):
        def __eq__(self, elem):
            return elem == self
    
    APIError = SimpleNamespace(
        isLoginFail=InSet({1001, 1002, 1003, 1007}),
        isOrderInvalid=InSet({1004, 1005, 1006, 1009, 1010})
    )
    
    print(APIError)
    # namespace(isLoginFail=InSet({1001, 1002, 1003, 1007}),
    # isOrderInvalid=InSet({1009, 1010, 1004, 1005, 1006}))

而 `InSet` 的 `__eq__` 能幫助我們快速讓 Error Code 進到對應的控制語句

在 3.10 以上就能使用 `match/case` ：

    code = 1002
    
    match code:
        case APIError.isLoginFail:
            print(f"The login fail error: {mapping[code]}")
        case APIError.isOrderInvalid:
            print(f"The order invalid error: {mapping[code]}")
        case _:
            print("Unhandled error code")
    # 1002 is a login fail error: 交易帳號不存在。

或是在 3.10 以前可以使用 `if/else` ：

    code = 1002
    
    if code == APIError.isLoginFail:
        print(f"The login fail error: {mapping[code]}")
    elif code == APIError.isOrderInvalid:
        print(f"The order invalid error: {mapping[code]}")
    else:
        print("Unhandled error code")
    # 1002 is a login fail error: 交易帳號不存在。


## 關於簡易命名空間 `SimpleNamespace`

`SimpleNamespace` 有以下比 `namedtuple`, `dict` 好的優勢：

1.  可以透過 . 訪問屬性，就像一般 Object 般使用
2.  可以設定自帶初始化屬性
3.  比起 class 又更輕量，訪問何存儲更快速
4.  內建 `repr()` 就是屬性自己: `eval(repr(sn))==sn`
5.  比對不是透過 id 而是透過屬性本身的值

