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
    // Interroghiamo la API per farci ritornare il match con quello scritto dall utente

    // $.ajax({
    //   url:"https://api.themoviedb.org/3/movie/550?api_key=68d4888fdac250927f94dcdbf7553096",
    //   method: "GET",
    //   success: function(data){
    //     $("").html(data);
    //     console.log(data)
    //     },
    
  });



});
