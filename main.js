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
