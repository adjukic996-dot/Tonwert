/* Kontrast von Text ueber dem Aufmacherfoto — im Browser auf der Startseite
   ausfuehren. Tastet die echten Bildpunkte ab, rechnet die Deckung des
   Schleiers darueber und gibt den SCHLECHTESTEN Punkt aus. Der Mittelwert
   taeuscht: er lag beim ersten Durchgang bei 13:1, waehrend die schlechteste
   Stelle 3,88:1 hatte.
   STOPPS muessen mit .aufmacher__dunkel in stil.css uebereinstimmen. */
const STOPPS = [[0,.34],[0.30,.18],[0.58,.46],[0.80,.66],[1,.80]];
