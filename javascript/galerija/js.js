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
    if(brPiksela>1800){
        for(let a = 0; a<100 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1800 && brPiksela>1600){
        for(let a = 0; a<89 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1600 && brPiksela>1400){
        for(let a = 0; a<78 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1400 && brPiksela>1200){
        for(let a = 0; a<67 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1200 && brPiksela>1000){
        for(let a = 0; a<67 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<1000 && brPiksela>800){
        for(let a = 0; a<56 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<800 && brPiksela>600){
        for(let a = 0; a<45 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<600 && brPiksela>400){
        for(let a = 0; a<34 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
        }
    }
    else if(brPiksela<400){
        for(let a = 0; a<23 ; a++){
            document.getElementById('sneg').innerHTML +="<i></i>"
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
    }
    else{
        document.getElementById('dobrodosli').style.height = brPiksela+"px";
    }
}
window.addEventListener('resize', velicinaPozadine);
window.addEventListener('DOMContentLoaded', velicinaPozadine);
/*---------------------------------------------------------------------------------*/
var prikazi = true;
function prikaziMeni(){
    let brPiksela = document.documentElement.clientHeight;
    if (prikazi===true){
    document.getElementById('nav').classList = "";
    document.getElementById('oba_slidera').style.visibility = "hidden";
    if(brPiksela>900){
    document.getElementById('body').style.overflowY = "hidden";
    }
    prikazi=false;
    }
    else{
    document.getElementById('nav').classList = "sakrij";
    document.getElementById('oba_slidera').style.visibility = "visible";
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
var index=0;
var indexCopy=0;
var slike=['slider0.jpg','slider1.jpg','slider2.jpg','slider3.jpg','slider4.jpg','slider5.jpg','slider6.jpg','slider7.jpeg','slider8.jpg'];   
function galerija(text){    
    if(text==='next'){
        if(index==8){
            index=0;
        }
        else{
            index++;
        }
    }
    else if(text==='prev'){
        if(index==0){
            index=8;
        }
        else{
            index--;
        }
    }
    document.getElementById(slike[indexCopy]).style.backgroundColor = 'black';
    document.getElementById(slike[index]).style.backgroundColor = 'white';
    document.getElementById('slider').src='img/'+ slike[index];
    indexCopy=index;
}
/*---------------------------------------------------------------------------------*/
function labelClick(text, idBR){
    indexCopy=index;
    document.getElementById('slider').src='img/'+ text;
    index=idBR;
    document.getElementById(slike[indexCopy]).style.backgroundColor = 'black';
    document.getElementById(text).style.backgroundColor = 'white';

}
/*---------------------------------------------------------------------------------*/
var pauza = false;
var vreme = 0;
function radnoVreme(text){
    pauza=text;
}
function promeniSlideove(){
    setInterval(() => {
    if(pauza==false){
    vreme++;
    }    
    if(vreme%6==0 && vreme!=0){
        galerija('next');
        vreme=0;
    }
}, 1000);
}
window.addEventListener('DOMContentLoaded', promeniSlideove);
/*---------------------------------------------------------------------------------*/
function ceoekran(arg){
        document.getElementById(arg).requestFullscreen();
}
/*---------------------------------------------------------------------------------*/
