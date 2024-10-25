const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789";
const btn = document.getElementById("gomb");
const cook = document.querySelector(".cookieWarning");
const cookBtn = document.getElementById("cookBtn");

if(localStorage.getItem("megnyomta") != "igen"){
    cook.style.display = "flex";
}


cookBtn.onclick = function(){
    localStorage.setItem("megnyomta", "igen");
    cook.style.display = "none";
}





//AB-123
var uzenet = null

console.log(btn);

btn.onclick = function () {
    var input = document.getElementById("m_azon").value
    //console.log("jó")
    //console.log(input)
    uzenet = "Az azonosító megfelelő!"
    if (!input) {
        uzenet = "Nem adtál meg azonosítót!"
    }
    if(!input.match(/^[A-Z]{2}-[0-9]{3}$/g)){
        uzenet = "Az azonosító formailag nem megfelelő!"
    }
    alert(uzenet);

}