//Creo le funzioni per le azioni del click sui pulsanti per scrorre le immagini in un carousel

//Funzione per andare avanti
function nextSlide(imgDom){



};

//Funzione per andare avanti
function nextSlide(){
  var img = $('img.active');

  if (img.hasClass("end")) {
    img.removeClass("active");
    $('.start').addClass('active');

  }else{
    img.removeClass("active");
    img.next("img").addClass("active");

  }


  console.log(img.next("img"));

};








//Creo l'evento click sui controlli delle slide

//Setto una variabile con selettore JQuery per salvare il dom dei pulsanti dello slider
var prev = $('.prev');
var next = $('.next');
var imgActive = $('img.active');

//Azione per scrorrere in avanti
next.click(nextSlide);
