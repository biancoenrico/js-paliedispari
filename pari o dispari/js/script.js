// Pari e Dispari


// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var pariDispari = prompt('dimmi se vuoi pari o dispari')
var numeroUtente = parseInt(prompt('dimmi un numero da 1 a 5'))

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
var numeroComputer = numGen()

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
sommaPariODispari(numeroUtente,numeroComputer)

// Dichiariamo chi ha vinto.
if(sommaPariODispari(numeroUtente,numeroComputer) == pariDispari){
    alert ('hai vinto')
}else{
    alert ('hai perso')
}



// =============================================== //


// funzioni

//funzione numGen
//
//genera un numero casuale da 1 a 6
function numGen(){
    return Math.floor(Math.random() * 6) + 1;
}

//funzione sommaPariODispari
//
//somma due interi restituendo se la somma é pari o dispari
function sommaPariODispari(num1,num2){

    var somma = num1 + num2 

    if(somma % 2 !== 0){
        return 'dispari'
    }
    return 'pari'
}


