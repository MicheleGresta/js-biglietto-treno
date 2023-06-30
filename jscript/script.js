const userKm = prompt("quanti Km vuoi percorrere?");
const userAge = prompt("quanti anni hai?");
const userOld = 65;
const userYoung = 18;

// sconto 20%
const userSconto20 = (parseInt(userKm) * 0.21);
const totSconto20 = ((userSconto20 * 80) / 100);
// sconto 40%
const userSconto40 = (parseInt(userKm) * 0.21);
const totSconto40 = ((userSconto40 * 60) / 100);
// prezzo pieno
const fullPrice = (userKm * 0.21);



// document.getElementById("costo-viaggio").innerHTML = 

   
    if(userAge > userOld) {
        document.getElementById("costo-viaggio").innerHTML = "Rientra nella categoria più adulta, pertanto è previsto uno sconto del 40%, per un totale da pagare di " + totSconto40 + "€.";
    } else if (userAge < userYoung) {
        document.getElementById("costo-viaggio").innerHTML ="Rientra nella categoria più giovane, pertanto le aspetta uno sconto del 20%, per un totale da pagare di " + totSconto20 + "€.";
    } else {
        document.getElementById("costo-viaggio").innerHTML ="Il prezzo del biglietto per percorrere " + userKm + " Km è di " + fullPrice + " €.";
    }
