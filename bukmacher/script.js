let kursy = [1.25, 2.50 , 1.85 , 3.60 , 10.00 , 1,13 ]

let wygrane = [50, 150, 243, 100, 7000]
let suma = 0;

function odflirtujKursy(){
    let wysokieKursy = [];
    for(let i = 0; i < kursy.length; i++ ){
        if(kursy[i] >=2.0){
            wysokieKursy.push(kursy[i]);
        }
    }

   return wysokieKursy;
}

function wygraneKwoty(){
    for(let i = 0; i < wygrane.length; i++){
        suma += wygrane[i];
    }
    return suma;
}

console.log(wygraneKwoty());
console.log(odflirtujKursy());