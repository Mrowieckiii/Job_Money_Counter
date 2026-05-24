const btn = document.getElementById('confirm')
const godziny = document.getElementById('inp1')
const stawka = document.getElementById('inp2')
const display = document.getElementById('display')
const lista = document.getElementById('listaZmian')
const sumaDisplay = document.getElementById('sumaCalkowita')
let sumaGlobalna = 0;

btn.addEventListener('click', function(){
    let g = Number(godziny.value);
    let s = Number(stawka.value);
    
    let aktualnyWynik = (g * s);

    let wynik = obliczZarobki(g,s);
    display.innerText = wynik;
    let dates = new Date();
    let datesMax = dates.toLocaleString();


    let li = document.createElement('li');
     li.innerText = ` ${wynik} | ${datesMax}`

     lista.appendChild(li);
     sumaGlobalna += aktualnyWynik

     sumaDisplay.innerText = `Łącznie zarobiono: ${sumaGlobalna.toFixed(2)} zł`
})

function obliczZarobki(g,s){
    let wyniczek = g * s;
   // if(g > 8){
     //   wyniczek += 50;
   // }

    return `za tę zmianę wypada ${wyniczek.toFixed(2)} zł`;

}