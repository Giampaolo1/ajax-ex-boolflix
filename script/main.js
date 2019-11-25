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

      success: function(data){
        console.log(data)
    },
      error: function(){
        console.log("There is an error");
      }
    })

  });



});
