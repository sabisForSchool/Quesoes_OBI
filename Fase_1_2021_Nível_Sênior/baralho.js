const entrada = "11P01C02C01U02U03U04U"
let cadaCarta = [];

let contador = 0;
let carta = "";

const tamanhoBaralho = entrada.length/3;

for(var e = 0; e < tamanhoBaralho; e++){//separando a string em cartas 11P, 01C...
    for(var i = contador; i < contador + 3; i++){
        carta+= entrada[i];
    }
    contador+=3;
    cadaCarta.push(carta);
    carta = "";
}
const cartaDeCopas = [];
const cartaEspada = [];
const cartaOuro = [];
const cartaPaus = [];

for(let i = 0; i < cadaCarta.length; i++){
    switch(cadaCarta[i][2]){
        case "C":
            cartaDeCopas.push(cadaCarta[i]);
            break;
        case "E":
            cartaEspada.push(cadaCarta[i]);
            break;
        case "U":
            cartaOuro.push(cadaCarta[i]);
            break;
        case "P":
            cartaPaus.push(cadaCarta[i]);
            break;
    }
}

const setC =  new Set(cartaDeCopas);
const setE = new Set(cartaEspada);
const setU = new Set(cartaOuro);
const setP = new Set(cartaPaus);

let duplicaC, duplicaE, duplicaU, duplicaP;
duplicaC = duplicaE = duplicaU = duplicaP = false;

if(setC.size != cartaDeCopas.length){
    duplicaC = true;
}
if(setE.size != cartaEspada.length){
    duplicaE = true;
}
if(setU.size != cartaOuro.length){
    duplicaU = true;
}
if(setP.size != cartaPaus.length){
    duplicaE = true;
}


if(duplicaC === true){
    console.log("erro");
}else if(cartaDeCopas.length == 13){
    console.log("0");
}else{
    const faltam = 13 - cartaDeCopas.length;
    console.log(faltam);
}

if(duplicaE === true){
    console.log("erro");
}else if(cartaEspada.length == 13){
    console.log("0");
}else{
    const faltam = 13 - cartaEspada.length;
    console.log(faltam);
}

if(duplicaU === true){
    console.log("erro");
}else if(cartaOuro.length == 13){
    console.log("0");
}else{
    const faltam = 13 - cartaOuro.length;
    console.log(faltam);
}

if(duplicaP === true){
    console.log("erro");
}else if(cartaPaus.length == 13){
    console.log("0");
}else{
    const faltam = 13 - cartaPaus.length;
    console.log(faltam);
}