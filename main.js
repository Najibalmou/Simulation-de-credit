let Taux1 = document.getElementById('Taux1');
let Taux = document.getElementById('Taux');

Taux1.addEventListener('input', function() {
 Taux.value = this.value;
});



let Montant1 = document.getElementById('Montant1');
let Montant = document.getElementById('Montant');

Montant1.addEventListener('input', function() {
    Montant.value = this.value;
});


let Duree1 = document.getElementById('Duree1');
let Duree = document.getElementById('Duree');

Duree1.addEventListener('input', function() {
    Duree.value = this.value;
});



let langs = document.querySelector(".langs"),
   link = document.querySelectorAll("a"),
   p2 = document.querySelector(".p2"),
   fin1 = document.querySelector(".fin1");
   title = document.querySelector(".title");
   tauxx = document.querySelector(".tauxx");
   Montantt = document.querySelector(".Montantt");
   Dureee = document.querySelector(".Dureee");
   Dureeee = document.querySelector(".Dureeee");
   Montanttt = document.querySelector(".Montanttt");
   tauxxx = document.querySelector(".tauxxx");
   mois = document.querySelector(".mois");
   moiss = document.querySelector(".moiss");
   simulerr = document.querySelector(".simulerr");
   mensualitee = document.querySelector(".mensualitee");

link.forEach(el=>{
el.addEventListener("click",()=>{
   

    let attr = el.getAttribute("language")

    p2.textContent = data[attr].p2
    fin1.textContent = data[attr].fin1
    title.textContent = data[attr].title
    tauxx.textContent = data[attr].tauxx
    Montantt.textContent = data[attr].Montantt
    Dureee.textContent = data[attr].Dureee
    Montanttt.textContent = data[attr].Montanttt
    Dureeee.textContent = data[attr].Dureeee
    tauxxx.textContent = data[attr].tauxxx
    mois.textContent = data[attr].mois
    moiss.textContent = data[attr].moiss
    simulerr.textContent = data[attr].simulerr
    mensualitee.textContent = data[attr].mensualitee
})
})

let data = {
    english: {
p2: "Choose the rate, amount and duration of your credit",
fin1: "We wish you an excellent visit to our website.",
title: "SIMULATE MY CREDIT",
tauxx: "Rate",
Montantt: "Amount",
Dureee: "duration",
Dureeee: "duration :",
Montanttt: "Amount :",
tauxxx: "Rate :",
mois: "months :",
moiss: "months :",
simulerr: "Simulate ",
mensualitee: "Monthly Payment ",

    },
    frensh: {
p2: "Choisissez le taux , le montant et la durée de votre crédit",
fin1: "Nous vous souhaitons une excellente visite sur notre site.",
title: "SIIMULER MON CREDIT",
tauxx: "Taux",
Montantt: "Montant",
Dureee: "Durée",
Dureeee: "durée :",
Montanttt: "Montant :",
tauxxx: "Taux :",
mois: "mois :",
moiss: "mois :",
simulerr: "Simuler ",
mensualitee: "Mensualite ",

    },
    germany: {
p2: "Wählen Sie Zinssatz, Betrag und Laufzeit Ihres Kredits",
fin1: "Wir wünschen Ihnen einen schönen Besuch auf unserer Website.",
title: "SIMULIEREN SIE MEINE KREDITWüRDIGKEIT",
tauxx: 'Rate',
Montantt: 'Geldbetrag',
Dureee: 'Dauer',
Dureeee: 'Dauer :',
Montanttt: 'Geldbetrag :',
tauxxx: 'Rate :',
mois: 'Monat :',
moiss: 'Monat :',
simulerr: 'Simulieren ',
mensualitee: 'Monatliche Bezahlung ',

    }

}
