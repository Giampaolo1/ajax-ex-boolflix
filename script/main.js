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
  var ricercaUtente = $(".message").val();
  console.log(ricercaUtente);



  // al click del bottone parte la chiamata ajax x la ricerca
  $(".bottoneVai").click(function(){
    // chiama l api
    // e chiedigli se trova dei risultati

});
