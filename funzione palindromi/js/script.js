// Palindroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

var parolaUtente = 'pippo';
console.log(parolaUtente);

var messaggioPalindroma = palindroma(parolaUtente);

alert(messaggioPalindroma);

//var risultato = funzione(parametro1, parametro2);


// la funzione deve capire se una parola é palindroma o no
// 
function palindroma(parola){

    var isParolaPalindroma = true;

    for( var i = 0; i < parola.length; i++ ){

        console.log(parola[i], parola[parola.length - i - 1]);

        if(isParolaPalindroma && parola[i] != parola[parola.length - i - 1]){
            isParolaPalindroma = false;
        }        
    }
    return isParolaPalindroma;
   
}

        //console.log('prima della if' + i);
        //console.log('prima della if' + parola.length);
        
        /*
        if(parola[i] == parola[parola.length]){
            console.log('nella if' + parola.length);
            console.log('nella if' + parola[parola.length - i]);
            messaggio = 'la parola é palindroma';
        }else{
            console.log('nell else' + parola.length);
            console.log('nell else' + parola[i]);
            messaggio = 'la parola non é palindroma';
        }
        */

        /*
        anna
        0 3
        1 2
        2 1
        3 0
        */
