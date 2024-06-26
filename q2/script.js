const weekday=["日","月","火","水","木","金","土",]
function After(){
    console.log(document.getElementById('y').value,document.getElementById('m').value-1,document.getElementById('d').value)
    let date=new Date(document.getElementById('y').value,document.getElementById('m').value-1,document.getElementById('d').value);
    console.log(date);
    date.setDate(date.getDate()+Number(document.getElementById('input').value));
    console.log(document.getElementById('input').value);
    console.log(date);
    document.getElementById('result').innerHTML = String(date.getFullYear())+"年"+String(date.getMonth()+1)+"月"+String(date.getDate())+"日"+String(weekday[date.getDay()])+"曜日";
}
function Before(){
    console.log(document.getElementById('y').value,document.getElementById('m').value-1,document.getElementById('d').value)
    let date=new Date(document.getElementById('y').value,document.getElementById('m').value-1,document.getElementById('d').value);
    console.log(date);
    date.setDate(date.getDate()-Number(document.getElementById('input').value));
    console.log(document.getElementById('input').value);
    console.log(date);
    document.getElementById('result').innerHTML = String(date.getFullYear())+"年"+String(date.getMonth()+1)+"月"+String(date.getDate())+"日"+String(weekday[date.getDay()])+"曜日";
}