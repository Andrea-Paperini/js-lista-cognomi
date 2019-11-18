// Chiedo all'utente il proprio cognome
var cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);
// Creo la variabile che contiene la lista dei cognomi
var lista = ['Andrea ', 'Fabio ', 'Emanuele ', 'Lorenzo '];
console.log(lista);
// Metto tutto il contenuto inserito dall'utente nella lista
lista.push(cognome);
// utilizzo la funzione sort per un ordine alfabetico
// la funzione sort è case sensitive perciò l'imput dell'utente deve essere con la prima lettera maiuscola per essere ordinato correttamente
lista.sort();
// Uso for per stampare la lista testando quando i raggiunge 4, uscendo dal ciclo
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
// sfrutto la funzione indexOf per stabilire la posizione del cognome inserito dall'utente
lista.indexOf(cognome);
// stampo la funzione indexOf per verificare il funzionamento del sistema
console.log(lista.indexOf(cognome));
var listahtml = lista;
// Inserisco la lista nell'html
document.getElementById('lista').innerHTML = listahtml;
