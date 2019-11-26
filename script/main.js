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

        // HB
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        // HB

        for (var i = 0; i < data.results.length; i++) {
          var oggetto = data.results[i];

          $('.container').append(html)

          // HB
          var context = oggetto;
          var html = template(context);
          // HB

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
          console.log(oggetto.vote_average);
          var arrotonda = (Math.round(oggetto.vote_average/2));
          console.log(arrotonda);
          console.log("--------");

          // così da permetterci di stampare
          // a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote

          // append arrotonda to class Stelle
          // $(".stelle").append(arrotonda);




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
