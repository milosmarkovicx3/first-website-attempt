
/*---------------------------------------------------------------------------------*/
function brojElemenata(){

    var brPiksela = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
    document.getElementById('sneg').innerHTML = "";
    document.getElementById('sneg2').innerHTML = "";
    if(brPiksela>1800){
        for(let a = 0; a<100 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1800 && brPiksela>1600){
        for(let a = 0; a<89 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1600 && brPiksela>1400){
        for(let a = 0; a<78 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1400 && brPiksela>1200){
        for(let a = 0; a<67 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1200 && brPiksela>1000){
        for(let a = 0; a<67 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1000 && brPiksela>800){
        for(let a = 0; a<56 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<800 && brPiksela>600){
        for(let a = 0; a<45 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<600 && brPiksela>400){
        for(let a = 0; a<34 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<400){
        for(let a = 0; a<23 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
            document.getElementById('sneg2').innerHTML +="<i></i>"
        }
    }
}
window.addEventListener('resize', brojElemenata);
window.addEventListener('DOMContentLoaded', brojElemenata);
/*---------------------------------------------------------------------------------*/
function velicinaPozadine(){  
    let brPiksela = document.documentElement.clientHeight;
    if (brPiksela<900){
        document.getElementById('dobrodosli').style.height = "940px";
        document.getElementById('biografija').style.height = "940px";
    }
    else{
        document.getElementById('dobrodosli').style.height = brPiksela+"px";
        document.getElementById('biografija').style.height = brPiksela+"px";
    }
}
window.addEventListener('resize', velicinaPozadine);
window.addEventListener('DOMContentLoaded', velicinaPozadine);
/*---------------------------------------------------------------------------------*/
var vrteska = true;
setInterval(vrteskaCitata,6000);
function vrteskaCitata() {
    var i = document.getElementById("citat");    
    i.style.opacity=0;
    setTimeout(()=>{
        i.style.opacity=0.8;
        if(vrteska==true){    
            i.innerHTML="“Eventually, you relize you never asked for too much, you were just asking the wrong person.”"; 
            vrteska=false;
            }else{
            i.innerHTML="“It’s no measure of health to be well adjusted to a profoundly sick society.”";        
            vrteska=true;
            }  
    },1000)
                  
}
/*---------------------------------------------------------------------------------*/
var prikazi = true;
function prikaziMeni(){
    let brPiksela = document.documentElement.clientHeight;
    if (prikazi===true){
    document.getElementById('nav').classList = "";
    document.getElementById('citat').style.visibility = "hidden";
    if(brPiksela>900){
    document.getElementById('body').style.overflowY = "hidden";
    }
    prikazi=false;
    }
    else{
    document.getElementById('nav').classList = "sakrij";
    document.getElementById('citat').style.visibility = "visible";
    document.getElementById('body').style.overflowY = "scroll";
    prikazi=true;
    }
}
/*---------------------------------------------------------------------------------*/
function navclick(){
    var brPiksela = Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
      );
      if(brPiksela>1040){
          return false;
      }
      prikaziMeni();
}
/*---------------------------------------------------------------------------------*/
setTimeout("sakrijLoadingAnimaciju()",3000);
  function sakrijLoadingAnimaciju() {
    document.getElementById("ucitavanje").style.display="none";
    document.body.style.overflow="visible";
} 
/*---------------------------------------------------------------------------------*/
function velicinaSneg2(){
    let brPiksela = document.getElementById('galerija').offsetHeight;
    document.getElementById('sneg2').style.height = 100+ brPiksela +"px";
}
window.addEventListener('resize', velicinaSneg2);
setTimeout("velicinaSneg2()",1000);
/*---------------------------------------------------------------------------------*/
