let saat = document.getElementById("saat");
let saat3 = document.getElementById("saat3");
let saat2 = document.getElementById("saat2");
let dakika = document.getElementById("dakika");
let saniye = document.getElementById("saniye");
let settings = document.getElementById("settings");
let settingsButton= document.getElementById("settings-button");
let closebutton= document.getElementById("close-button");
let form = document.getElementById("form");
let inputHour = document.getElementById("input-hour")
let inputMinute = document.getElementById("input-minute")
let inputSecond = document.getElementById("input-second")
let start_button = document.getElementById("start_button")
let speedup = document.getElementById("speed-up")
let speedown = document.getElementById("speed-down")
let removeSetButton = document.getElementById("remove-set-button");
let dakikahiz= 60000;
let saniyehiz= 1000;
let saathiz= 6000000;

settingsButton.onclick=()=>{
    settings.style.transform= "translateY(-50px)"
}

closebutton.onclick=()=>{
    settings.style.transform= "translateY(-300px)"
}

let dizi = [23,59,59,1000];

setInterval(() => {
    console.log(dizi[3])
}, 1000);

inputHour.onchange=(e)=>{
    dizi[0]=e.target.value
}

inputMinute.onchange=(e)=>{
    dizi[1]= e.target.value
}

inputSecond.onchange=(e)=>{
    dizi[2]=e.target.value
}

start_button.onclick=()=>{

    saat.innerHTML=`${dizi[0]}` 
    dakika.innerHTML=`${dizi[1]}` 
    saniye.innerHTML=`${dizi[2]}` 
}

let sayac= setInterval(() => {
    if(dizi[2]== 0 ){
        dizi[2]= 60
    }
    if(dizi[2]<=5){
        saat3.style.border="1px solid red"
    }
    else{
        saat3.style.border="1px solid white"
    }
    dizi[2]--;
    if(dizi[2]==0){
        if(dizi[1] > 0){
            dizi[1]--
            saat2.style.border=" 1px solid red"
        }
    }
    else{
        saat2.style.border=" 1px solid white"
    }
    if(dizi[1]==0 && dizi[2]==0){
        dizi[0]--;
    }
    if(dizi[0]==0 && dizi[1]==0 && dizi[2]==0){
        clearInterval(sayac)
    }
}, dizi[3]);


speedup.onclick=()=>{
    dizi[3]-=100
    clearInterval(sayac)
    sayac= setInterval(() => {
        if(dizi[2]== 0 ){
            dizi[2]= 60
        }
        dizi[2]--
        if(dizi[2]==0){
            if(dizi[1] > 0){
                dizi[1]--
            }
        }
        if(dizi[1]==0 && dizi[2]==0){
            if(dizi[1]== 0 && dizi[0]>0){
                dizi[0]--
                dizi[1]=59
            }
        }
        if(dizi[0]==0 && dizi[1]==0 && dizi[2]==0){
            clearInterval(sayac)
        }
    }, dizi[3]);
    console.log(dizi[3])
}

speedown.onclick=()=>{
    dizi[3]+=100
    clearInterval(sayac)
    sayac= setInterval(() => {
        if(dizi[2]== 0 ){
            dizi[2]= 60
        }
        dizi[2]--;
        if(dizi[2]==0){
            if(dizi[1] > 0){
                dizi[1]--
            }
        }
        if(dizi[1]== 0 && dizi[0]>0){
            dizi[1]==59
        }
        if(dizi[1]==0 && dizi[2]==0){
            dizi[0]--
        }
        if(dizi[0]==0 && dizi[1]==0 && dizi[2]==0){
            clearInterval(sayac)
            console.log("Timer Has Finished")
        }
    }, dizi[3]);
}

setInterval(() => {

    saat.innerHTML=`${dizi[0]}`
    dakika.innerHTML=`${dizi[1]}`
    saniye.innerHTML=`${dizi[2]}`
    
}, 1);

removeSetButton.onclick=()=>{
     dizi = [23,59,59,1000];
     console.log(inputHour)
     inputHour.value=""
     inputMinute.value=""
     inputSecond.value=""
}

saat2.addEventListener("dblclick",()=>{
    var element = document.documentElement;
    if (element.requestFullscreen) {
    element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { 
    element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { 
    element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { 
    element.msRequestFullscreen();
    }
})





