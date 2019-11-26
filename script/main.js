// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto

$(document).ready(function() {

  // l utente digiterà qualcosa sulla searchbar

  // Ci salviano il valore dell input inserito dall utente
  $(".bottoneVai").click(function(){

    // ripulisco la pagina
    $(".container").html("");

    var ricercaUtente = $(".barraRicerca").val();
    // console.log(ricercaUtente);

    // al click del bottone parte la chiamata ajax x la ricerca

// API KEY: 68d4888fdac250927f94dcdbf7553096

    var ricerca = $(".barraRicerca").val();


    $.ajax({
      // metto parte dell url
      url:"https://api.themoviedb.org/3/search/movie",
      method: "GET",

      // &query= a quello entrato nella searchbar
      // completiamo la url di chiamata con i parametri passati

      data: {
        api_key: "68d4888fdac250927f94dcdbf7553096",
        query: ricerca
      },

      // Vogliamo dopo la risposta dell’API
      // visualizzare a schermo i seguenti valori per ogni film trovato.

      // results: Array
      // 1.title 2.original_title 3.original_language 4.vote_average


      success: function(data){
        // console.log(data)

        // HB API
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        for (var i = 0; i < data.results.length; i++) {
          var oggetto = data.results[i];
          oggetto.stelle = (Math.round(oggetto.vote_average/2));
          // "<ul>
          //     <li>stella</li>
          //   </ul>";
          // HB API
          var html = template(oggetto);

          // HB API
          $('.container').append(html);

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










        }

      // ripulisco la barra ricerca x una nuova ricerca
      $(".barraRicerca").val("");

    },
      error: function(){
        console.log("There is an error");
      }
    })

  });

  // 4.vote_average
  // Trasformiamo il numero da 1 a 10 decimale in un numero intero da 1 a 5



});

// Milestone 2:
// Trasformiamo il numero da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare
// a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote
// (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene.

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
