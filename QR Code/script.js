let container=document.querySelector(".container");
let qrinput=document.querySelector("#text");
let generatebtn=document.querySelector("#generate");
let img=document.querySelector("#qr_code");
let preinput
generatebtn.onclick=function(){
    let input=qrinput.value.trim()
    if(!input || input===preinput){
        return 
    }
    else{
        preinput=input;
        generatebtn.innerText="Generating QR code....."
        qrimg.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=$(input)';
        
    }
}
