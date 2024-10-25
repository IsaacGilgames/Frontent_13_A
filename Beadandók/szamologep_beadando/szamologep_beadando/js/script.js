var szamok = document.querySelectorAll('.sz')
const kiiras = document.getElementById('kiiras')
const eredmeny = document.getElementById('eredmeny')
var muvelete = false
var egyenlotol = false;
var muveletek = 0;
var elozoMuv;
var voltegyenlo = false;

function szam(x) {
    voltegyenlo = false;
    //ne legyen dupla vessző
    if (x == "." && (kiiras.innerText.includes(".") || kiiras.innerText.length == 0 || egyenlotol || muvelete)) {

    }
    //felülír
    else if (egyenlotol) {
        kiiras.innerText = x;
        muvelete = false;
        egyenlotol = false;
    }

    //hozzáfűz a művelethez, de felülírja a számot
    else if (muvelete) {
        kiiras.innerText = x;
        muvelete = false;
    }
    else {
        kiiras.innerText = kiiras.innerText + x;
    }

}
function CE() {
    kiiras.innerText = ""
    if (voltegyenlo) {
        eredmeny.innerText = ""
    }
}
function C() {
    kiiras.innerText = ""
    eredmeny.innerText = ""

    muvelete = false
    egyenlotol = false;
    muveletek = 0;
}
function muvelet(muv) {
    if (kiiras.innerText.length != 0 &&  kiiras.innerText!="-") {
        
      
        if (muveletek == 0) {
            eredmeny.innerText = kiiras.innerText + muv;
            muveletek++;
            muvelete = true;
            egyenlotol = false;
            elozoMuv = muv
        }
        if (!muvelete && muveletek == 1) {
            
            var x = eredmeny.innerText + kiiras.innerText
            D = x.split(elozoMuv);
            if(D.length==3){
                var eleje = D[0]+elozoMuv+D[1]
                var vege = D[2]
            }
            else{
                var eleje=D[0]
                var vege=D[1]
            }
            egyenlotol = false;
            muvelete = true;
            muveletek = 1;
            switch (elozoMuv) {
                case '+': kiiras.innerText = parseFloat(eleje) + parseFloat(vege); eredmeny.innerText = kiiras.innerText + muv; elozoMuv = muv; break;
                case '-': kiiras.innerText = eleje - vege; eredmeny.innerText = kiiras.innerText + muv; elozoMuv = muv; break;
                case '*': kiiras.innerText = eleje * vege; eredmeny.innerText = kiiras.innerText + muv; elozoMuv = muv; break;
                case '/': kiiras.innerText =eleje / vege; eredmeny.innerText = kiiras.innerText + muv; elozoMuv = muv; break;
                default: break;
            }
        }
    }

}
function egyenlo() {
    if (kiiras.length != 0 && muveletek != 0) {
        eredmeny.innerText = eredmeny.innerText + kiiras.innerText
        D = eredmeny.innerText.split(elozoMuv)
        if(D.length==3){
            var eleje = D[0]+elozoMuv+D[1]
            var vege = D[2]
        }
        else{
            var eleje=D[0]
            var vege=D[1]
        }
        muvelete = false;
        muveletek = 0;
        voltegyenlo = true;
        switch (elozoMuv) {
            case '+': kiiras.innerText = parseFloat(eleje) + parseFloat(vege); eredmeny.innerText; egyenlotol = true; break;
            case '-': kiiras.innerText = eleje - vege; eredmeny.innerText; egyenlotol = true; break;
            case '*': kiiras.innerText = eleje * vege; eredmeny.innerText; egyenlotol = true; break;
            case '/': kiiras.innerText = eleje / vege; eredmeny.innerText; egyenlotol = true; break;
            default: break;
        }
    }

}   
function vissza() {
    if (kiiras.innerText.length == 1) {
        kiiras.innerText = 0;
    }
    else {
        kiiras.innerText = kiiras.innerText.substring(0, kiiras.innerText.length - 1);
    }
}
function pluszMinusz(){
    if (kiiras.innerText[0]==0 && kiiras.innerText.length==1){
        return;
    }
    if (kiiras.innerText !== 0 && kiiras.innerText[0]!='-'){
        kiiras.innerText = "-" + kiiras.innerText;
    }
    else{
        kiiras.innerText = kiiras.innerText.substring(1,kiiras.innerText.length)
    }
}
function memoria(){
    kiiras.innerText = localStorage.getItem("eredmeny");
}
function memoriaSave(){
    localStorage.setItem("eredmeny", kiiras.innerText);
}
function memoriaClear(){
    localStorage.removeItem("eredmeny");
}