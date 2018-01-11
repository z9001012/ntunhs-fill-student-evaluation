var radios;

for(var i =1; i<=10; i++){
    radios = window.frames[1].document.getElementsByName('rb'+i)[0].checked = true;
}
radios = window.frames[1].document.getElementsByName('rbA')[0].checked=true;
radios = window.frames[1].document.getElementsByName('rbB')[4].checked=true;
window.frames[1].document.getElementsByName('OPN_REM')[0].value='嗨嗨老師好';
var form = window.frames[1].document.getElementById('frmST').submit();
