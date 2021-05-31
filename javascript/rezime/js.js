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
var prikazi = true;
function prikaziMeni(){
    let brPiksela = document.documentElement.clientHeight;
    if (prikazi===true){
    document.getElementById('nav').classList = "";
    document.getElementById('glavni_div').style.display = "none";
    if(brPiksela>900){
    document.getElementById('body').style.overflowY = "hidden";
    }
    prikazi=false;
    }
    else{
    document.getElementById('nav').classList = "sakrij";
    document.getElementById('glavni_div').style.display = "block";
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
    document.getElementById('glavni_div').style.display = "block";
} 
/*---------------------------------------------------------------------------------*/
