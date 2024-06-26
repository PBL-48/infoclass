function After(){
    var last = document.getElementById('aft');
    const daymonth = ["31","28","31","30","31","30","31","31","30","31","30","31"];
    var m=2;
    while (last>daymonth[m-1]){
        last -=daymonth[m-1];
        m +=1;
    }
    document.getElementById('result').innerHTML=String(m)+"月"+String(last)+"日";
}