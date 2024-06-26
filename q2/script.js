const weekday=["日","月","火","水","木","金","土"];

function After(){
    let date=new Date(document.getElementById('y').value, document.getElementById('m').value - 1, document.getElementById('d').value);
    date.setDate(date.getDate() + Number(document.getElementById('input').value));
    document.getElementById('result').innerHTML = String(date.getFullYear()) + "年" + String(date.getMonth() + 1) + "月" + String(date.getDate()) + "日" + String(weekday[date.getDay()]) + "曜日";
}
function Before(){
    let date=new Date(document.getElementById('y').value, document.getElementById('m').value - 1, document.getElementById('d').value);
    date.setDate(date.getDate() - Number(document.getElementById('input').value));
    document.getElementById('result').innerHTML = String(date.getFullYear()) + "年" + String(date.getMonth() + 1) + "月" + String(date.getDate()) + "日" + String(weekday[date.getDay()]) + "曜日";
}