function getTime() {
    var date = new Date();
    var saat = date.getHours();
    var dakika = date.getMinutes();
    var saniye = date.getSeconds();
    var gun = date.getDay();
debugger
    if (gun == 1) {
        gun = "Pazartesi";
    } else if (gun == 2) {
        gun = "Salı";
    } else if (gun == 3) {
        gun = "Çarşamba";
    } else if (gun == 4) {
        gun = "Perşembe";
    } else if (gun == 5) {
        gun = "Cuma";
    } else if (gun == 6) {
        gun = "Cumartesi";
    } else if (gun == 7) {
        gun = "Pazar";
    }

    var time = saat + ":" + dakika + ":" + saniye + " - " + gun;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(getTime, 1000);
}

function enterName() {
    var isim = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = isim;
}


enterName();
getTime();