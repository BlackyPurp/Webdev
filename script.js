var currentQuestionZaehler = 0;
var currentErgebnisZaehler = 0;
var currentQuestionPermut = 0;
var currentErgebnisPermut = 0;
var currentQuestionVari = 0;
var currentErgebnisVari = 0;
var currentQuestionKombi = 0;
var currentErgebnisKombi = 0;

function umfrageAbsenden() {
  var requiredFields = document.querySelectorAll(".umfrage[required]");
  var isValid = true;

  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === "") {
      isValid = false;
      break;
    }
  }

  if (isValid){
    document.getElementById("umfrage").innerHTML = "Vielen dank fuer deine Antwort!";
    document.getElementById('umfrage').style.backgroundColor = 'green';
    document.getElementById('umfrage').style.gridColumn = "2 / span 2";
    document.getElementById('umfrage').style.marginTop = "40px";
    document.getElementById('umfrage').style.marginBottom = "40px";
}}
function kontaktAbsenden() {
  var requiredFields = document.querySelectorAll(".kontakt[required]");
  var isValid = true;

  for (var i = 0; i < requiredFields.length; i++) {
    if (requiredFields[i].value === "") {
      isValid = false;
      break;
    }
  }

  if (isValid){
    document.getElementById("kontakt").innerHTML = "Vielen dank fuer deine Antwort!";
    document.getElementById('kontakt').style.backgroundColor = 'green';
    document.getElementById('kontakt').style.gridColumn = "2 / span 2";
    document.getElementById('kontakt').style.marginTop = "40px";
    document.getElementById('kontakt').style.marginBottom = "40px";
}}

function changeQuestionZaehler(correctness){
    var frage = [
        "Wenn Tim sich jetzt 2 neue Hosen und noch 2 Verschiedene Jacken zum Anziehen fuer sein Outfit hinzufuegt, wieviele Moegliche Kombinationen waeren dann fuer ihn mogelich?",
        "Wenn Tim sich nun dazu entscheidet, keine jacken mehr anzuziehen und dafuer 5 Pullies kauft, wie viele Kombinationen waeren nun moeglich?",
        "Das wars mit den Fragen zum Allgemeinen Zaehlerprinzip! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionZaehler++;
        document.getElementById("aufgabeZaehler").innerHTML = frage[currentQuestionZaehler];
        document.getElementById("aufgabeZaehler").style.backgroundColor = 'white';
    }else{
        document.getElementById("aufgabeZaehler").innerHTML = frage[currentQuestionZaehler];
        document.getElementById("aufgabeZaehler").style.backgroundColor = "white";
    }
}

function changeQuestionPermut(correctness){
    var frage = [
        "Tim hat 5 Karten mit verschiedenen Bildern auf der Hand, wie viele Moeglichkeiten gibt es, die Karten in einer Reihe auf den Tisch zu legen?",
        "Wenn Tim nun 5 Karten auf der Hand hat, von denen sich 2 nicht unterscheiden, wie viele Moeglichkeiten gibt es, die Karten in einer Reihe auf den Tisch zu legen?",
        "Das wars mit den Fragen zur Permutation! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionPermut++;
        document.getElementById("aufgabePermut").innerHTML = frage[currentQuestionPermut];
        document.getElementById("aufgabePermut").style.backgroundColor = 'white';
    }else{
        document.getElementById("aufgabePermut").innerHTML = frage[currentQuestionPermut];
        document.getElementById("aufgabePermut").style.backgroundColor = "white";
    }
}

function changeQuestionVari(correctness){
    var frage = [
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten unter Beachtung der Reihenfolge und mit zuruecklegen gezogen werden. Wie viele moeglichkeiten gibt es?",
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten unter Beachtung der Reihenfolge und ohne zuruecklegen gezogen werden. Wie viele moeglichkeiten gibt es?",
        "Das wars mit den Fragen zur Variation! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionVari++;
        document.getElementById("aufgabeVar").innerHTML = frage[currentQuestionVari];
        document.getElementById("aufgabeVar").style.backgroundColor = 'white';
    }else{
        document.getElementById("aufgabeVar").innerHTML = frage[currentQuestionVari];
        document.getElementById("aufgabeVar").style.backgroundColor = "white";
    }
}

function changeQuestionKombi(correctness){
    var frage = [
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten ohne Beachtung der Reihenfolge und ohne zuruecklegen gezogen werden. Wie viele moeglichkeiten gibt es?",
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten ohne Beachtung der Reihenfolge und mit zuruecklegen gezogen werden. Wie viele moeglichkeiten gibt es?",
        "Das wars mit den Fragen zur Kombination! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionKombi++;
        document.getElementById("aufgabeKombi").innerHTML = frage[currentQuestionKombi];
        document.getElementById("aufgabeKombi").style.backgroundColor = 'white';
    }else{
        document.getElementById("aufgabeKombi").innerHTML = frage[currentQuestionKombi];
        document.getElementById("aufgabeKombi").style.backgroundColor = "white";
    }
}

function aufgaben(call){
    switch(call){
        case 1:{
            var ergebnisCheckZaehler = ["100","250"];
            if(currentErgebnisZaehler == 2){
                return;
            }
            if(document.getElementById("ergebnisZaehler").value == ergebnisCheckZaehler[currentErgebnisZaehler]){
                document.getElementById("aufgabeZaehler").innerHTML = "Richtig!";
                document.getElementById("aufgabeZaehler").style.backgroundColor = "green";
                document.getElementById("aufgabeZaehler").style.gridColumn = "2 / span 1";
                setTimeout(changeQuestionZaehler,3000,true);
                currentErgebnisZaehler++;
            }else{
                document.getElementById("aufgabeZaehler").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeZaehler").style.backgroundColor = "red";
                setTimeout(changeQuestionZaehler,3000,false);
            }
            break;
        }
        case 2:{
            var ergebnisCheckPermut = ["120","10"];
            if(currentErgebnisPermut == 2){
                return;
            }
            if(document.getElementById("ergebnisPermut").value == ergebnisCheckPermut[currentErgebnisPermut]){
                document.getElementById("aufgabePermut").innerHTML = "Richtig!";
                document.getElementById("aufgabePermut").style.backgroundColor = "green";
                setTimeout(changeQuestionPermut,3000,true);
                currentErgebnisPermut++;
            }else{
                document.getElementById("aufgabePermut").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabePermut").style.backgroundColor = "red";
                setTimeout(changeQuestionPermut,3000,false);
            }
            break;
        }
        case 3:{
            var ergebnisCheckVari = ["10000","5040"];
            if(currentErgebnisVari == 2){
                return;
            }
            if(document.getElementById("ergebnisVari").value == ergebnisCheckVari[currentErgebnisVari]){
                document.getElementById("aufgabeVar").innerHTML = "Richtig!";
                document.getElementById("aufgabeVar").style.backgroundColor = "green";
                setTimeout(changeQuestionVari,3000,true);
                currentErgebnisVari++;
            }else{
                document.getElementById("aufgabeVar").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeVar").style.backgroundColor = "red";
                setTimeout(changeQuestionVari,3000,false);
            }
            break;
        }
        case 4:{
            var ergebnisCheckKombi = ["210","715"];
            if(currentErgebnisKombi == 2){
                return;
            }
            if(document.getElementById("ergebnisKombi").value == ergebnisCheckKombi[currentErgebnisKombi]){
                document.getElementById("aufgabeKombi").innerHTML = "Richtig!";
                document.getElementById("aufgabeKombi").style.backgroundColor = "green";
                setTimeout(changeQuestionKombi,3000,true);
                currentErgebnisKombi++;
            }else{
                document.getElementById("aufgabeKombi").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeKombi").style.backgroundColor = "red";
                setTimeout(changeQuestionKombi,3000,false);
            }
            break;
        }
        case 5:{
            break;
        }
    }
}