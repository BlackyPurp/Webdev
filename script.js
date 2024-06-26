var currentQuestionZähler = 0;
var currentErgebnisZähler = 0;
var currentQuestionPermut = 0;
var currentErgebnisPermut = 0;
var currentQuestionVari = 0;
var currentErgebnisVari = 0;
var currentQuestionKombi = 0;
var currentErgebnisKombi = 0;
var currentQuestionRHäufig = 0;
var currentErgebnisRHäufig = 0;
var currentQuestionAHäufig = 0;
var currentErgebnisAHäufig = 0;


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
    document.getElementById("umfrage").innerHTML = "Vielen dank für deine Antwort!";
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

function changeQuestionZähler(correctness){
    var frage = [
        "Wenn Tim sich jetzt 2 neue Hosen und noch 2 Verschiedene Jacken zum Anziehen für sein Outfit hinzufügt, wieviele Mögliche Kombinationen wären dann für ihn möglich?",
        "Wenn Tim sich nun dazu entscheidet, keine jacken mehr anzuziehen und dafür 5 Pullies kauft, wie viele Kombinationen wären nun möglich?",
        "Das wars mit den Fragen zum Allgemeinen Zählerprinzip! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionZähler++;
        document.getElementById("aufgabeZähler").innerHTML = frage[currentQuestionZähler];
        document.getElementById("aufgabeZähler").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabeZähler").innerHTML = frage[currentQuestionZähler];
        document.getElementById("aufgabeZähler").style.backgroundColor = "#ededed";
    }
}

function changeQuestionPermut(correctness){
    var frage = [
        "Tim hat 5 Karten mit verschiedenen Bildern auf der Hand, wie viele Möglichkeiten gibt es, die Karten in einer Reihe auf den Tisch zu legen?",
        "Wenn Tim nun 5 Karten auf der Hand hat, von denen sich 2 nicht unterscheiden, wie viele Möglichkeiten gibt es, die Karten in einer Reihe auf den Tisch zu legen?",
        "Das wars mit den Fragen zur Permutation! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionPermut++;
        document.getElementById("aufgabePermut").innerHTML = frage[currentQuestionPermut];
        document.getElementById("aufgabePermut").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabePermut").innerHTML = frage[currentQuestionPermut];
        document.getElementById("aufgabePermut").style.backgroundColor = "#ededed";
    }
}

function changeQuestionVari(correctness){
    var frage = [
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten unter Beachtung der Reihenfolge und mit zurücklegen gezogen werden. Wie viele möglichkeiten gibt es?",
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten unter Beachtung der Reihenfolge und ohne zurücklegen gezogen werden. Wie viele möglichkeiten gibt es?",
        "Das wars mit den Fragen zur Variation! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionVari++;
        document.getElementById("aufgabeVar").innerHTML = frage[currentQuestionVari];
        document.getElementById("aufgabeVar").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabeVar").innerHTML = frage[currentQuestionVari];
        document.getElementById("aufgabeVar").style.backgroundColor = "#ededed";
    }
}

function changeQuestionKombi(correctness){
    var frage = [
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten ohne Beachtung der Reihenfolge und ohne zurücklegen gezogen werden. Wie viele möglichkeiten gibt es?",
        "Auf einem Tisch liegen 10 verschiedene karte. Es sollen 4 Karten ohne Beachtung der Reihenfolge und mit zurücklegen gezogen werden. Wie viele möglichkeiten gibt es?",
        "Das wars mit den Fragen zur Kombination! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionKombi++;
        document.getElementById("aufgabeKombi").innerHTML = frage[currentQuestionKombi];
        document.getElementById("aufgabeKombi").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabeKombi").innerHTML = frage[currentQuestionKombi];
        document.getElementById("aufgabeKombi").style.backgroundColor = "#ededed";
    }
}

function changeQuestionRHäufig(correctness){
    var frage = [
        "Wir werfen 100x eine Münze, Berechne, mithilfe folgender Tabelle die relative Häufigkeit für Kopf in Prozent.(Ohne % Zeichen)",
        "Das wars mit den Fragen zur Relativen Häufigkeit! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionRHäufig++;
        document.getElementById("aufgabeRHäufigAB").innerHTML = frage[currentQuestionRHäufig];
        document.getElementById("aufgabeRHäufigAB").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabeRHäufig").innerHTML = frage[currentQuestionRHäufig];
        document.getElementById("aufgabeRHäufig").style.backgroundColor = "#ededed";
    }
}

function changeQuestionAHäufig(correctness){
    var frage = [
        "Eine Münze wurde 200x geworfen, in 60% der Fälle lag Kopf oben, Wie oft lag kopf oben?",
        "Das wars mit den Fragen zur Absoluten Häufigkeit! Super Gemacht!"
    ];
    if(correctness){
        currentQuestionAHäufig++;
        document.getElementById("aufgabeAHäufig").innerHTML = frage[currentQuestionAHäufig];
        document.getElementById("aufgabeAHäufig").style.backgroundColor = '#ededed';
    }else{
        document.getElementById("aufgabeAHäufig").innerHTML = frage[currentQuestionAHäufig];
        document.getElementById("aufgabeAHäufig").style.backgroundColor = "#ededed";
    }
}



function aufgaben(call){
    switch(call){
        case 1:{
            var ergebnisCheckZähler = ["100","250"];
            if(currentErgebnisZähler == 2){
                return;
            }
            if(document.getElementById("ergebnisZähler").value == ergebnisCheckZähler[currentErgebnisZähler]){
                document.getElementById("aufgabeZähler").innerHTML = "Richtig!";
                document.getElementById("aufgabeZähler").style.backgroundColor = "green";
                document.getElementById("aufgabeZähler").style.gridColumn = "2 / span 1";
                setTimeout(changeQuestionZähler,3000,true);
                currentErgebnisZähler++;
            }else{
                document.getElementById("aufgabeZähler").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeZähler").style.backgroundColor = "red";
                setTimeout(changeQuestionZähler,3000,false);
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
            var ergebnisCheckRHaufig = ["48"];
            if(currentErgebnisRHäufig == 1){
                return;
            }
            if(document.getElementById("ergebnisRelativeHäufigkeit").value == ergebnisCheckRHaufig[currentErgebnisRHäufig]){
                document.getElementById("aufgabeRHäufigAB").innerHTML = "Richtig!";
                document.getElementById("aufgabeRHäufigAB").style.backgroundColor = "green";
                setTimeout(changeQuestionRHäufig,3000,true);
                currentErgebnisRHäufig++;
            }else{
                document.getElementById("aufgabeRHäufig").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeRHäufig").style.backgroundColor = "red";
                setTimeout(changeQuestionRHäufig,3000,false);
            }
            break;
        }
        case 6:{
            var ergebnisCheckAHaufig = ["120"];
            if(currentErgebnisAHäufig == 1){
                return;
            }
            if(document.getElementById("ergebnisAbso").value == ergebnisCheckAHaufig[currentErgebnisAHäufig]){
                document.getElementById("aufgabeAHäufig").innerHTML = "Richtig!";
                document.getElementById("aufgabeAHäufig").style.backgroundColor = "green";
                setTimeout(changeQuestionAHäufig,3000,true);
                currentErgebnisAHäufig++;
            }else{
                document.getElementById("aufgabeAHäufig").innerHTML = "Leider Falsch, versuch's nochmal";
                document.getElementById("aufgabeAHäufig").style.backgroundColor = "red";
                setTimeout(changeQuestionAHäufig,3000,false);
            }
            break;
        }
    }
}