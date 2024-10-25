const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const number = "0123456789"
const btn = document.getElementById("gomb")
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
    else if (input.length !== 6) {
        uzenet = "Nem megfelelő a hossza!"
    }
    else {
        for (let i = 0; i <= 1; i++) {
            if (!ABC.includes(input[i])) {
                uzenet = "Az első két karakter nem nagy betű!"
            }
        }
        if (input[2] !== "-") {
            uzenet = "Nincs benne kötőjel!"
        }
        for (let i = 3; i <= 5; i++) {
            if (!number.includes(input[i])) {
                uzenet = "Az utolsó három karaktere nem szám!"
            }
        }

    }


    alert(uzenet)

}