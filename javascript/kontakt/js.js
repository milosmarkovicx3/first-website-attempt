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
/* function velicinaPozadine(){  
    let brPiksela = document.documentElement.clientHeight;
    document.getElementById('dobrodosli').style.height = brPiksela+"px";
}
document.getElementById('poruka').addEventListener('resize', velicinaPozadine);
window.addEventListener('resize', velicinaPozadine);
window.addEventListener('DOMContentLoaded', velicinaPozadine); */
/*---------------------------------------------------------------------------------*/
 function provera(){
    var uzorak_ime = document.mojaforma.ime.value;
    var uzorak_prezime = document.mojaforma.prezime.value;
    var uzorak_posiljalac = document.mojaforma.posiljalac.value;
    var uzorak_naslov = document.mojaforma.naslov.value;
    var uzorak_poruka = document.mojaforma.poruka.value;
    const regex = RegExp('^(?=.*@).+');
    var istina = true;


    if(uzorak_ime==="" || uzorak_ime===null){
        document.getElementById("lime").innerHTML="ime: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else{
        document.getElementById("lime").innerHTML="ime:"
    }
    if(uzorak_prezime==="" || uzorak_prezime===null){
        document.getElementById("lprezime").innerHTML="prezime: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else{
        document.getElementById("lprezime").innerHTML="prezime:"
    }
    if(uzorak_posiljalac==="" || uzorak_posiljalac===null){
        document.getElementById("lposiljalac").innerHTML="email: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else if(regex.test(uzorak_posiljalac)==false){
        document.getElementById("lposiljalac").innerHTML="email: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else{
        document.getElementById("lposiljalac").innerHTML="email:"
    }
    if(uzorak_naslov==="" || uzorak_naslov===null){
        document.getElementById("lnaslov").innerHTML="naslov: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else{
        document.getElementById("lnaslov").innerHTML="naslov:"
    }
    if(uzorak_poruka==="" || uzorak_poruka===null){
        document.getElementById("lporuka").innerHTML="poruka: <span class='greska_poruka'>pokušajte opet<span>"
        istina=false;
    }
    else{
        document.getElementById("lporuka").innerHTML="poruka:"
    }
    
    if(istina===false){
        return false;
    }
    else if(istina===true){
        alert("Uspesno ste poslali poruku!");
        localStorage.setItem("ime",uzorak_ime);
        localStorage.setItem("prezime",uzorak_prezime);
        localStorage.setItem("posiljalac",uzorak_posiljalac);
        localStorage.setItem("naslov",uzorak_naslov);
        localStorage.setItem("poruka",uzorak_poruka);
        
        var datum = new Date();
        var dan=datum.getDate();
        if(dan<10){dan="0"+dan;}
        var mesec=datum.getMonth()+1;
        if(mesec<10){mesec="0"+mesec;}
        var sati=datum.getHours();
        if(sati<10){sati="0"+sati;}
        var minuti=datum.getMinutes();
        if(minuti<10){minuti="0"+minuti;}
        let vreme = dan+"."+mesec+"."+datum.getFullYear()+", "+sati+":"+minuti;
        localStorage.setItem("vreme", vreme);
    }
}
function vrati() {
    document.getElementById("lime").innerHTML="ime:"
    document.getElementById("lprezime").innerHTML="prezime:"
    document.getElementById("lposiljalac").innerHTML="email:"
    document.getElementById("lnaslov").innerHTML="naslov:"
    document.getElementById("lporuka").innerHTML="poruka:"
}
/*---------------------------------------------------------------------------------*/