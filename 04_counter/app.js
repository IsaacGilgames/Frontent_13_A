/*
Készítsd el a weboldal javascript kódját a következő képpen:
-Gomb kattintásra növeld vagy csökkentsd a képernyő közepén megjelenő egész számot
-A középső gomb megnyomására nullázd a szám értékét!
-Ha a szám pozitív, a képernyőn megjelenő érték legyen zöld
-Ha a szám negatív, a képernyőm megjelenő érték legyen piros
-Ha a szám nulla, a képernyőn megjelenő érték legyen fekete
*/

let count = 0;
const value = document.getElementById("value");
const csokken = document.querySelector(".decrease");
const nullazd = document.querySelector(".reset");
const noveld = document.querySelector(".increase");

csokken.onclick = function(){
    count--;
    value.innerHTML = count;
    szin();
}

noveld.onclick = function(){
    count++;
    value.innerHTML = count;
    szin();
}

nullazd.onclick = function(){
    count=0;
    value.innerHTML = count;
    szin();
}

function szin(){
    if (count == 0){
        value.style.color = "black";
    }
    else if(count < 0){
        value.style.color = "red";
    }
    else{
        value.style.color = "green";
    }
}