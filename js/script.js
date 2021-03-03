//  creo un array contenente i cognomi
var arrayCognomiBool = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// chiedo all'utente di inserire il proprio cognome
do {
  var cognomeNew = prompt("inserisci qui il tuo cognome");
  // rendo solo la prima lettera maiuscola
  cognomeNew = cognomeNew.charAt(0).toUpperCase() + cognomeNew.slice(1);
} while (!isNaN(cognomeNew));

// inserisco il nuovo cognome nell'array in ordine alfabetico
arrayCognomiBool.push(cognomeNew);
arrayCognomiBool.sort();

//  stampo il mio array sotto forma di lista a schermo
for (var i = 0; i < arrayCognomiBool.length; i++) {
  document.getElementById('lista_array').innerHTML += "<li>" + arrayCognomiBool[i] + "</li>";
}
// indico la posizione del nuovo cognome all'interno dell'array ordinato alfabeticamente
var posizione = (arrayCognomiBool.indexOf(cognomeNew)) + 1;
console.log(posizione);
