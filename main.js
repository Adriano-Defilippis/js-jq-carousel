//ESECUZIONE DELLO SCRIPT DOPO
//IL CARICAMENTO DELLA PAGINA
$(document).ready(function(){

  //Setto una variabile con selettore JQuery per salvare il dom dei pulsanti dello slider
  var prev = $('.prev');
  var next = $('.next');

  //Creo l'evento click sui controlli delle slide
  //Azione per scrorrere in avanti
  next.click(nextSlide);
  prev.click(prevSlide);

});




//FUNZIONI DEL MIO SCRIPT

//Funzione per le azioni del click sui pulsanti per scrorre le immagini in un carousel
function nextSlide(){
  var img = $('img.active');

  if (img.hasClass("end")) {
    img.removeClass("active");
    $('img.start').addClass('active');

  }else{
    img.removeClass("active");
    img.next("img").addClass("active");
  }

};

//Funzione per mostrare Slide Precedente
function prevSlide(){
  var img = $('img.active');

  if (img.hasClass("start")) {
    img.removeClass("active");
    $('img.end').addClass('active');

  }else{
    img.removeClass("active");
    img.next("img").addClass("active");
  }

};
