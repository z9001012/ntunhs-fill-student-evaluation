## 自動填寫北護學生評量

### 簡介

每個學期的期末都會需要填寫學生評量才能夠使用數位學習系統查看自己的成績，雖然題目不多，但每門課都要手動填一次就覺得有點麻煩，因此此工具就產生啦～

### 用法

1. 進了教學評量頁面
2. 點擊想要使用工具填寫的課程
3. 使用 快捷鍵 Ctrl+Shift+I (Windows) 或 Cmd+Opt+I (Mac)可以叫出開發人員工具
5. 把下列程式貼上，按下enter 即可送出，再次點開剛剛那門課就可以發現已經被填寫完了

``` javascript

var radios;

for(var i =1; i<=10; i++){
    radios = window.frames[1].document.getElementsByName('rb'+i)[0].checked = true;
}
radios = window.frames[1].document.getElementsByName('rbA')[0].checked=true;
radios = window.frames[1].document.getElementsByName('rbB')[4].checked=true;
window.frames[1].document.getElementsByName('OPN_REM')[0].value='嗨嗨老師好';
var form = window.frames[1].document.getElementById('frmST').submit();

```

### 動圖教學

![](https://github.com/z9001012/ntunhs-fill-student-evaluation/blob/master/readme.gif?raw=true)



--


### 想要更改 `意見欄` 的值嗎？

可以在程式的 `第8行` 修改 value 的值：

####例子：
我想把 `嗨嗨老師好` 改成 `老師，我們明年再見`

``` javascript
window.frames[1].document.getElementsByName('OPN_REM')[0].value='老師，我們明年再見';
```




