
$(document).ready(function() {

  // l utente digiterà qualcosa sulla searchbar

  // L' utente digiterà qualcosa nella searchbar (input)
  // Evento di click
  $(".bottoneVai").click(function(){

    // ripulisco la pagina ad ogni nuova ricerca
    $(".container").html("");

    // Ci salviano il valore dell input inserito dall utente
    var ricercaUtente = $(".barraRicerca").val();
    // console.log(ricercaUtente);

    // al click del bottone parte la chiamata ajax x la ricerca (quindi ajax dentro evento di click)
    // API KEY: 68d4888fdac250927f94dcdbf7553096

    $.ajax({
      // metto parte dell url
      url:"https://api.themoviedb.org/3/search/movie",
      method: "GET",

      // &query= a quello entrato nella searchbar
      // completiamo la url di chiamata con i parametri passati

      data: {
        api_key: "68d4888fdac250927f94dcdbf7553096",
        query: ricercaUtente,
        language: 'it-IT'
      },

      // Vogliamo dopo la risposta dell’API
      // visualizzare a schermo i seguenti valori per ogni film trovato.
      // results: Array:
      // 1.title 2.original_title 3.original_language 4.vote_average

      success: function(data){
      console.log(data)

        // Handlebars per stampare i risultati ritornati dall API
        // HB API
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < data.results.length; i++) {
          // trasformo i risultati dell array dell api (data.results) in una var che chiamo oggetto
          var oggetto = data.results[i];

          // trasformo il rating (vote_average) in un numero di stelle da 1 a 5
          var rating = (Math.round(oggetto.vote_average/2));
          // e ciclo per calcolare il numero di stelleFigure
          var stelleFigure = "";
          for (var x = 1; x <= 5 ; x++) {
            if (x <= rating) {
              stelleFigure += '<i class= "fas fa-star"></i>';
            }
            else {
              stelleFigure += '<i class= "far fa-star"></i>';
            }
          }

          // aggiungo le stelline all' oggetto
          oggetto.stars = stelleFigure;

          // e stampo l oggetto sulla classe stelle

          // IDEA: ---------------------------------------------
          // Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente,

          var lingua = oggetto.original_language;

          if (lingua == "en") {
            oggetto.original_language = '<img class="flag" src="img/en.png">';
          }
          else if (lingua == "it") {
            oggetto.original_language = '<img class="flag" src="img/it.png">';
          }
          else {
          }

          // IDEA: -----------------------------

          var poster = oggetto.poster_path;
          oggetto.poster_path = "https://image.tmdb.org/t/p/w185" + poster;

          // HB API
          var html = template(oggetto);
          // stampa HB API
          $('.container').append(html);


        }

        // ripulisco la barra ricerca x una nuova ricerca
        $(".barraRicerca").val("");
      },

      error: function(){
        console.log("There is an error with API");
      }

    })

    // ---------------seconda chiamata ajax TV SERIES------------------------


  // fine fx click
  });

// fine doc ready
});

// CONSEGNE-----------------------------------------------------------------------

// Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente,
// gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API
// (le flag non ci sono in FontAwesome).
//
// Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film
// che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili
// (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)

// Qui un esempio di chiamata per le serie tv:
// https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs


// IDEA: controllo sui grassetti



// // //Prendere il template
// var sorgenteHtml = $('#template').html();
// console.log('sorgente', sorgenteHtml)
// //Diciamo ad handlebars che template vogliamo utilizzare
// var template = Handlebars.compile(sorgenteHtml);
// console.log('oggetto handlebars', template)
// //Passiamo i parametri che vogliamo mettere
// var risultato = template({
// title: 'Questo è il titolo!',
// body: '<p>Valore in grassetto!</p>'
// });
// console.log('risultato', risultato)
// //Stampare il nostro risultato a schermo!
// $('.content').append(risultato);
// //.text() per mettere testo e basta => per handlebars è {{}}
// //.html() per mettere testo assieme ad html => per handlebars è {{{}}}


// stampare LE STELLE FIGURE
// se tu passi un oggetto aggiungerai una proprietà all'oggetto
// esempio :
// oggetto.mioparametro = "<p>ciao</p>";
// template(oggetto);
// e verrà passato quel parametro con il nome {{mioparametro}}
// IDEA:
// no perchè concateni il numero all'html.. se vuoi ripetere l'html devi farlo tramite un ciclo prima in una variabile a parte
// var html = "";
// for(quante volte voglio) {
//   html += "<li>stella</li>";
// }
// oggetto.stelle = html;


// USA CICLO FOR..IN X CICLARE gli OGGETTI (pensato apposta)

// var x;
// for (x in oggetto) {
//   console.log(x + " : " + oggetto[x]);
// }
// console.log("---------");

// Inserisco nell'html con append
// STAMPA IN PAGINA
// $('.container').append(oggetto)

// console.log(i + " " + data.results[i].title);
// console.log(oggetto.title);

// console.log(data.results[i].original_title);
// console.log(oggetto.original_title);

// console.log(data.results[i].original_language);
// console.log(oggetto.original_language);

// console.log(data.results[i].vote_average);
// console.log(oggetto.vote_average);

// console.log("-------");

// 4.vote_average
// Trasformiamo il numero da 1 a 10 decimale in un numero intero da 1 a 5
// console.log(oggetto.vote_average);
// console.log(arrotonda);
// console.log("--------");

// così da permetterci di stampare
// a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote

// append arrotonda to class Stelle
// $(".stelle").append(arrotonda);

// Usa HB x appendere:

// var source = $("#entry-template2").html();
// var template = Handlebars.compile(source);
//
// // CREO L OGGETTO X HB Stelle
// var oggetto2 = {myVal: arrotonda};
//
// // HB STELLE
// var context2 = oggetto2;
// var html2 = template(context2);
//
// // HB STELLE append
// $('.container').append(html2);

//
//   // HB API
//   $('.container').append(html)
//
//   // HB API
//   var context = oggetto;
//   var html = template(context);

// Stampare le STELLE FIGURE

  // var stelleFigure = "";
  //   for(5) {
  //     html += "<li>stella</li>";
  //   }
  //   oggetto.stelle = html;
