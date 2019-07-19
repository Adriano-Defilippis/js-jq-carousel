//ESECUZIONE DELLO SCRIPT DOPO
//IL CARICAMENTO DELLA PAGINA
$(document).ready(function(){

  //Setto una variabile con selettore JQuery per salvare il dom dei pulsanti dello slider
  var prev = $('.prev');
  var next = $('.next');
  var firstImg = $('.slider img:first-child');
  var lastImg = $('.slider img:last-child');
  var firstPallino = $('.pallini span:first-child');
  //Lunghezza array che contiene le immagini
  var arrayImg = $('.slider img').length;
  var pallini = $('.pallini');
  //Contatore di appoggio per inserire un pallino ad ogni foto
  var element = 0;

  //Assegno in base ai selettori JQuery la class start ed end
  //al primo figlio e all'ultimo del loro contenitore .slider
  //in modo tale da non doverla aggiungere in Html a mano
  firstImg.addClass('start active');
  lastImg.addClass('end');


  console.log(arrayImg);

  //Creo i pallini e li appendo al contenitore t fino a quando
  //il numero dei pallini è uguale a quello delle immagini
  while (element < arrayImg) {

    var x = document.createElement("span");                        // Create a <p> node
    var t = document.getElementById('palliniId')    // Create a text node
    t.appendChild(x);
    element++
  }

  firstPallino.addClass('active');






  //Creo l'evento click sui controlli delle slide
  //Azione per scrorrere in avanti
  next.click(nextSlide);
  prev.click(prevSlide);
  // activatePallino();
  console.log($('.slider img'));

});

console.log($('.pallini span'));
console.log($('.slider img'));






//FUNZIONI DEL MIO SCRIPT

//Funzione per le azioni del click sui pulsanti per scrorre le immagini in un carousel
function nextSlide(){
  var active = $('img.active, .pallini span.active');

  if (active.hasClass("end")) {
    active.removeClass("active");
    $('img.start, .pallini span:first-child').addClass('active');

  }else{
    active.removeClass("active");
    active.next().addClass("active");

}
  //Devo assegnare il colore al pallino equivalente all'indice della foto selezionata

};



//Funzione per mostrare Slide Precedente
function prevSlide(){
  var active = $('img.active, .pallini span.active');
  if (active.hasClass("start")) {

    active.removeClass("active");
    $('img.end, .pallini span:last-child').addClass('active');

  }else{
    active.removeClass("active");
    active.prev().addClass("active");
    console.log($('.slider img'));

  }

};

//Funzione per comparare indice img ed indice del pallino
//ed assegnare a quest'ultimo un colore
function activatePallino(object){


}

//Funzione per creare i pallini in base al numero di immagini
//ed inserirli nel div in Html
function palliniGenerator(){
  var arrayImg = $('.slider img').length;
   return arrayImg;
}
