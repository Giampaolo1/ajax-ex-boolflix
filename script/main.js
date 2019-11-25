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
    var ricercaUtente = $(".barraRicerca").val();
    console.log(ricercaUtente);

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
        console.log(data)
        for (var i = 0; i < data.results.length; i++) {
          var oggetto = data.results[i];

          // USA CICLO FOR..IN X CICLARE gli OGGETTI (pensato apposta)

          var x;
          for (x in oggetto) {
            console.log(x + " : " + oggetto[x]);
          }
          console.log("---------");


          // console.log(i + " " + data.results[i].title);
          // console.log(oggetto.title);

          // console.log(data.results[i].original_title);
          // console.log(oggetto.original_title);

          // console.log(data.results[i].original_language);
          // console.log(oggetto.original_language);

          // console.log(data.results[i].vote_average);
          // console.log(oggetto.vote_average);

          // console.log("-------");
        }

    },
      error: function(){
        console.log("There is an error");
      }
    })

  });



});
