/**/ //Dichiarazione costanti e variabili globali
/**/ const RITARDO = 2000;
/**/ var indice;
/**/ var numeroFoto;
/**/ var automatico;
/**/ var nodoAvanti;
/**/ var nodoIndietro;
/**/ var nodoFoto;
/**/ var nodoNome;
/**/ var nodoDescrizioneNome;
/**/ function gestoreLoad () {
/**/     try {
/**/    nodoAvanti = document.getElementById("avanti");
/**/        nodoIndietro = document.getElementById("indietro");
/**/         nodoFoto = document.getElementById("foto");
/**/         nodoNome = document.getElementById("nomeyokai");
/**/         nodoDescrizioneNome = document.getElementById("descrizioneyokai");
/**/ 
/**/         var nodoTestoNome = document.createTextNode("");
/**/         nodoNome.appendChild(nodoTestoNome);
/**/ 
/**/         var nodoTestoDescrizioneNome = document.createTextNode("");
/**/         nodoDescrizioneNome.appendChild(nodoTestoDescrizioneNome);
/**/ 
/**/         nodoAvanti.onclick = gestoreClickAvanti;
/**/         nodoIndietro.onclick = gestoreClickIndietro;
/**/         numeroFoto = galleria.length;
/**/         automatico = false;
/**/         indice = 0;
/**/         cambiaFoto(0);
/**/     } catch ( e ) {
/**/       alert("gestoreLoad " + e);
/**/     }
/**/ }
/**/ window.onload = gestoreLoad;
/**/ 
/**/ var galleria = [
/**/    "Img/Galleria/Oni.jpg",
/**/    "Img/Galleria/Yuki_Onna.jpg",
/**/    "Img/Galleria/Rokuro_Kubi.jpg",
/**/    "Img/Galleria/Kappa.jpg",
/**/    "Img/Galleria/Kitsune.jpg"
/**/ ]
/**/ 
/**/ var nome = [
/**/     "ONI",
/**/     "YUKI ONNA",
/**/     "ROKURO KUBI",
/**/     "KAPPA",
/**/     "KITSUNE"
/**/ ]
/**/ 
/**/ var descrizione = [
/**/     "Gli oni sono grossi orchi, con corna sul capo e lunghe zanne. Di solito girano con indosso un perizioma tigrato. Nel periodo Heian venivano percepiti dall'immaginario comune come dei demoni invisibili. Sono violenti e rabbiosi, portatori di distruzione e malattie, anche se oggi questo loro aspetto feroce convive con una visione comica e affezionata, dato che sono diventati parte integrante della cultura giapponese.",
/**/     "La yuki onna è uno spirito femminile che appare fra i monti durante le notti innevate o le tormente di neve. Le leggende che la riguardano variano di regione in regione: c'è chi la definisce come lo spirito della neve, chi come lo spirito di una donna che è morta nella neve.Quando si avvista la yuki onna non le si deve parlare. Lo sfortunato malcapitato che decide di farlo è destinato a smarrirsi nella tormenta.",
/**/     "Il Rokuro Kubi, è uno yōkai dotato di un collo che può allungarsi a dismisura. Cerca le sue prede spingendo la testa lontana dal corpo, una capacità che si manifesta solo di notte, mentre di giorno presenta normali sembianze umane ed è difficile distinguerlo dalle persone comuni. Si crede che i Rokuro Kubi riescano a risucchiare lo spirito vitale di un essere umano e per questo sono considerati pericolosi.",
/**/     "I kappa sono yōkai che dimorano nei pressi di fiumi e paludi. Ricordano quindi una rana o una tartaruga delle dimensioni di un bambino. Al centro della loro testa c'è una piccola fossa contenente dell'acqua, fonte della loro forza soprannaturale. Hanno una personalità vivace e giocosa, amano fare scherzi ai passanti trascinandone i cavalli nel fiume e sono appassionati di sumo. Allo stesso tempo sono conosciuti per la macabra pratica di eviscerare gli umani che riescono ad attirare nel loro territorio.",
/**/     "Kitsune significa volpe. È uno degli yōkai più popolari in Giappone e al di fuori del paese. Le kitsune assumono spesso le sembianze di bellissime donne seducenti. In numerose leggende di cui sono protagoniste, riescono ad ingannare gli uomini e diventare loro mogli, fino a quando la loro reale natura non viene rivelata. È famosa l'abilità di mutaforma delle kitsune, così come i poteri soprannaturali che permettono loro di possedere il corpo o la mente delle persone. Inoltre vengono reputate capaci di far nascere il fuoco dalla propria coda e quindi spesso sono accusate di provocare incendi."
/**/ ]
/**/ 
/**/ //Gestori dell'evento click sui pulsanti avanti e indietro, che con la funzione cambiaFoto permettono di passare da una foto all'altra, con relative descrizioni.
/**/ function gestoreClickAvanti () {
/**/     try {
/**/         if (!automatico) {
/**/             cambiaFoto (+1);
/**/         }
/**/     } catch (e) {
/**/         alert("gestoreCLickAvanti " + e);
/**/     }
/**/ }
/**/ 
/**/ function gestoreClickIndietro () {
/**/     try {
/**/         if (!automatico) {
/**/             cambiaFoto (-1);
/**/         }
/**/     } catch (e) {
/**/         alert("gestoreCLickAvanti " + e);
/**/     }
/**/ }
/**/ 
/**/ function cambiaFoto (x) {
/**/     indice += x;
/**/     if (indice == numeroFoto) {
/**/            indice = 0;
/**/     }
/**/     if (indice < 0) {
/**/         indice = numeroFoto - 1;
/**/     }
/**/     nodoFoto.setAttribute("src", galleria[indice]); 
/**/ 
/**/     var nodoTestoDescrizioneNome = document.createTextNode(descrizione[indice]);
/**/     nodoDescrizioneNome.replaceChild(nodoTestoDescrizioneNome,nodoDescrizioneNome.firstChild);
/**/ 
/**/     var nodoTestoNome = document.createTextNode(nome[indice]);
/**/     nodoNome.replaceChild(nodoTestoNome,nodoNome.firstChild);
/**/ 
/**/ 
/**/ }