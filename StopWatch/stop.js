let millisec=0,sec=0,min=0,hours=0;
let timeshow=document.getElementById('timeshow')
let timeref;
document.getElementById('start').onclick=function(){
    timeref=setInterval(updateTime,10)
}
function updateTime(){
    millisec=millisec+10;
    if(millisec==1000){
        sec=sec+1;
        millisec=0;
        if(sec==60){
            min=min+1;
            sec=0;
            if(min==60){
                hours=hours+1;
                min=0;
            }
        }
    }
    let h,m,s,ms;
    if(hours<10){
        h='0'+hours
    }
    else{
        h=hours
    }
    if(min<10){
        m='0'+min
    }
    else{
        m=min
    }if(sec<10){
        s='0'+sec
    }
    else{
        s=sec
    }if(millisec<10){
        ms='0'+millisec
    }
    else if(millisec<100)
    {
        ms='00'+millisec
    }
    else{
        ms=millisec
    }
    timeshow.innerHTML=`${h}:${m}:${s}:${ms}`
}
document.getElementById('pause').onclick=function(){
    clearInterval(timeref)
}
document.getElementById('reset').onclick=function(){
    clearInterval(timeref)
    millisec=0;
    sec=0;
    min=0;
    hours=0;
    timeshow.innerHTML="00 : 00 : 00 : 000"
}
