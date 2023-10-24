const deg = 6;

const hora =document.querySelector('.hora');
const minuto =document.querySelector('.minuto');
const segundo =document.querySelector('.segundo');

setInterval(()=> {
    let tiempo = new Date ();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    hora.style.transform =`rotate(${(hr)+(min/12)}deg)`;
    minuto.style.transform =`rotate(${min}deg)`;
    segundo.style.transform =`rotate(${seg}deg)`;


})
function calcularTiempo() {
    let tiempo = new Date();
    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();
    let amPM = hora >= 12 ? "PM" : "AM";

   
    if (hora > 12) {
        hora -= 12;
    }

    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    let pantallareloj = hora + ":" + minuto + ":" + segundo + " " + amPM;
    let relojdigital = document.querySelector(".reloj2");

    relojdigital.innerHTML = pantallareloj;
}

setInterval(calcularTiempo, 1000);


                       