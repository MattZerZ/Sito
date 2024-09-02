/**/ //Dichiarazione variabili globali
/**/ var nodoNumeroDomanda;
/**/ var nodoTestoDomanda;
/**/ var nodoRisposta0;
/**/ var nodoTestoRisposta0;
/**/ var nodoRisposta1;
/**/ var nodoTestoRisposta1;
/**/ var nodoRisposta2;
/**/ var nodoTestoRisposta2;
/**/ var nodoAvanti;
/**/ var nodoRisultato;
/**/ var nodoInizia;
/**/ var numeroDomande;
/**/ var numeroDomandaCorrente;
/**/ var risposteDate;
/**/ function gestoreLoad () {
/**/     try {
/**/         nodoNumeroDomanda = document.getElementById("numeroDomanda");
/**/         nodoTestoDomanda = document.getElementById ("testoDomanda");
/**/         nodoRisposta0 = document.getElementById ("risposta0");
/**/         nodoTestoRisposta0 = document.getElementById ("testoRisposta0");
/**/         nodoRisposta1 = document.getElementById ("risposta1");
/**/         nodoTestoRisposta1 = document.getElementById ("testoRisposta1");
/**/         nodoRisposta2 = document.getElementById ("risposta2");
/**/         nodoTestoRisposta2 = document.getElementById ("testoRisposta2");
/**/         nodoAvanti = document.getElementById ("avanti");
/**/         nodoRisultato = document.getElementById ("risultato");
/**/         nodoInizia = document.getElementById ("inizia");
/**/         nodoAvanti.onclick = gestoreClickAvanti;
/**/         nodoInizia.onclick = gestoreClickInizia;
/**/         numeroDomande = quiz.length;
/**/         nuovoQuiz ();
/**/     } catch (e) {
/**/         alert ("gestoreLoad " + e);
/**/     }
/**/ }
/**/ 
/**/ window.onload = gestoreLoad;
/**/ 
/**/ // Funzione che fa partire il quiz dall'inizio
/**/ function nuovoQuiz () {
/**/     numeroDomandaCorrente = 0;
/**/     aggiornaDomanda (numeroDomandaCorrente);
/**/     scriviMessaggio (nodoRisultato, "");
/**/     risposteDate = [];
/**/ }
/**/ 
/**/ // Funzione che fa passare alla domanda successiva
/**/ function aggiornaDomanda (i) {
/**/     scriviMessaggio (nodoNumeroDomanda,
/**/          "Domanda " + (i + 1) + " di " + numeroDomande);
/**/     var parte = quiz[i];
/**/     scriviMessaggio (nodoTestoDomanda, parte.domanda)
/**/     scriviMessaggio (nodoTestoRisposta0, parte.risposte[0]);
/**/     scriviMessaggio (nodoTestoRisposta1, parte.risposte[1]);
/**/     scriviMessaggio (nodoTestoRisposta2, parte.risposte[2]);
/**/     nodoRisposta0.checked = false;
/**/     nodoRisposta1.checked = false;
/**/     nodoRisposta2.checked = false;
/**/ }
/**/ 
/**/ // Contenuti (domande, risposte e il numero della risposta esatta) codificati nella variabile quiz
/**/ var quiz = [
/**/     {   // domanda 1
/**/         domanda: "Cosa sono gli yōkai?",
/**/         risposte: [
/**/             "Racconti dell'orrore",
/**/             "Figure del folklore giapponese",
/**/             "Piatti tipici della cucina orientale",
/**/         ],
/**/         rispostaEsatta: 1
/**/     },
/**/     {   // domanda 2
/**/         domanda: "Un kappa è:",
/**/         risposte: [
/**/             "Un essere dall'aspetto di una rana o una tartaruga",
/**/             "Un grosso orco con corna sul capo e lunghe zanne ",
/**/             "Un essere soprannaturale dalle sembianze di volpe",
/**/         ],
/**/         rispostaEsatta: 0
/**/     },
/**/     {   // domanda 3
/**/         domanda: "Cosa potrebbe succedere se si incontra la yuki onna?",
/**/         risposte: [
/**/             "Si rischia di venire eviscerati",
/**/             "Si rischia di essere vittime di un incendio",
/**/             "Si rischia di perdersi nella tormenta di neve",
/**/         ],
/**/         rispostaEsatta: 2
/**/     },
/**/     {   // domanda 4
/**/         domanda: "Quale dei seguenti NON è un potere della kitsune?",
/**/         risposte: [
/**/             "Allungare il collo",
/**/             "Mutare forma",
/**/             "Impossessarsi di una persona",
/**/         ],
/**/         rispostaEsatta: 0
/**/     },
/**/ ];
/**/ 
/**/ // La funzione fa comparire il testo
/**/ function scriviMessaggio (nodo, messaggio) {
/**/     var nodoTesto = document.createTextNode (messaggio);
/**/     if (nodo.childNodes.length == 0) {
/**/         nodo.appendChild (nodoTesto);
/**/     } else {
/**/         nodo.replaceChild (nodoTesto, nodo.firstChild);
/**/     }
/**/ }
/**/ 
/**/ // Funzione che verifica quale sia la risposta data dall'utente e se il quiz è terminato visualizza il risultato grazie alla funzione calcolaEsito
/**/ function gestoreClickAvanti () {
/**/     try {
/**/         if (numeroDomandaCorrente == numeroDomande) {
/**/             return;
/**/         }
/**/         if (nodoRisposta0.checked) {
/**/             risposteDate[numeroDomandaCorrente] = 0;
/**/         } else if (nodoRisposta1.checked) {
/**/             risposteDate [numeroDomandaCorrente] = 1;
/**/         } else if (nodoRisposta2.checked) {
/**/             risposteDate [numeroDomandaCorrente] = 2;
/**/         } else {
/**/             return;
/**/         }
/**/         numeroDomandaCorrente++;
/**/         if (numeroDomandaCorrente == numeroDomande) {
/**/             var esito = calcolaEsito();
/**/             var s;
/**/             if (esito == 1) {
/**/                 s = "1 risposta esatta su " + numeroDomande;
/**/             } else {
/**/                 s = esito + " risposte esatte su " + numeroDomande;
/**/             }
/**/             scriviMessaggio (nodoRisultato, s);
/**/         } else {
/**/             aggiornaDomanda (numeroDomandaCorrente);
/**/         }
/**/     } catch (e) {
/**/         alert ("gestoreClickAvanti " + e);
/**/     }
/**/ }
/**/ function calcolaEsito () {
/**/     var numeroRisposteEsatte = 0;
/**/     for (var i = 0; i < quiz.length; i ++) {
/**/         var parte = quiz[i];
/**/         if (parte.rispostaEsatta == risposteDate[i]) {
/**/             numeroRisposteEsatte++;
/**/         }
/**/     }
/**/     return numeroRisposteEsatte;
/**/ }
/**/ 
/**/ // Funzione rinvia all'inizio del quiz
/**/ function gestoreClickInizia () {
/**/     try {
/**/         nuovoQuiz ();
/**/     } catch (e) {
/**/         alert("gestoreClickInizia " + e);
/**/     }
/**/ }