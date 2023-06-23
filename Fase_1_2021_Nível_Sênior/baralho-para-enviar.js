var entrada;
scanf("%s", entrada);
var cadaCarta = [];

var contador = 0;
var carta = "";

var tamanhoBaralho = entrada.length;
tamanhoBaralho /= 3;

for(var e = 0; e < tamanhoBaralho; e++){//separando a string em cartas 11P, 01C...
    for(var i = contador; i < contador + 3; i++){
        carta+= entrada[i];
    }
    contador+=3;
    cadaCarta.push(carta);
    carta = "";
}
var cartaDeCopas = [];
var cartaEspada = [];
var cartaOuro = [];
var cartaPaus = [];

for(var i = 0; i < cadaCarta.length; i++){
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

var setC =  new Set(cartaDeCopas);
var setE = new Set(cartaEspada);
var setU = new Set(cartaOuro);
var setP = new Set(cartaPaus);

var duplicaC, duplicaE, duplicaU, duplicaP;
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
    printf("%s", "erro");
}else if(cartaDeCopas.length == 13){
    printf("%d", 0);
}else{
    var faltam = 13 - cartaDeCopas.length;
    printf("%d", faltam);
}

if(duplicaE === true){
    printf("%s", "erro");
}else if(cartaEspada.length == 13){
    printf("%d", 0);
}else{
    var faltam = 13 - cartaEspada.length;
    printf("%d", faltam);
}

if(duplicaU === true){
    printf("%s","erro");
}else if(cartaOuro.length == 13){
    printf("%d", 0);
}else{
    var faltam = 13 - cartaOuro.length;
    printf("%d", faltam);
}

if(duplicaP === true){
    printf("%s", "erro");
}else if(cartaPaus.length == 13){
    printf("%d", 0);
}else{
    var faltam = 13 - cartaPaus.length;
    printf("%d", faltam);
}