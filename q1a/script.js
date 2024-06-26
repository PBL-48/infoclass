function OnButtonClick(){
    var last = 4+87;
if (last>28) {//2月
    last -= 28;
   if (last>31) {//3月
        last -=31;
        if (last>30) {//4月
            last -=30;
            if (last>31) {//5月
                last -=31;
                if (last>30) {//6月
                    last -=30;
                    if (last>31) {//7月
                        last -=31;
                        if (last>31) {//8月
                            last -=31;
                            if (last>30) {//9月
                                last -=30;
                                if (last>31) {//10月
                                    last -=31;
                                    if (last>30) {//11月
                                        last -=30;
                                        if (last>31) {//12月
                                            last -=31;
                                            if (last>31) {//1月
                                                last -=31; //どこまで伸ばせばいいかわからなかったので、とりあえず一年分
                                            }else{
                                                document.getElementById('result').innerHTML="1月"+String(last)+"日";  
                                            }
                                        }else{
                                            document.getElementById('result').innerHTML="12月"+String(last)+"日";
                                        }
                                    }else{
                                        document.getElementById('result').innerHTML="11月"+String(last)+"日";
                                    }
                                }else{
                                    document.getElementById('result').innerHTML="10月"+String(last)+"日";
                                }
                            }else{
                                document.getElementById('result').innerHTML="9月"+String(last)+"日";
                            }
                        }else{
                            document.getElementById('result').innerHTML="8月"+String(last)+"日";
                        }
                    }else{
                        document.getElementById('result').innerHTML="7月"+String(last)+"日";
                    }
                }else{
                    document.getElementById('result').innerHTML="6月"+String(last)+"日";
                }
            }else{
                document.getElementById('result').innerHTML="5月"+String(last)+"日";
            }
        }else{
            document.getElementById('result').innerHTML="4月"+String(last)+"日";
        }
    }else{
        document.getElementById('result').innerHTML="3月"+String(last)+"日";
    }
}else{
    document.getElementById('result').innerHTML="2月"+String(last)+"日";
}
}