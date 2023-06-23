const numeros = [1,3,5,4,0,0,7,0,0,6];

var quantiZero = 0;
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] == 0){
        quantiZero++;
        for(let e = i+1; e < numeros.length; e++){
            if(numeros[e] == 0){
                quantiZero++;
            }else{
                break;
            }
        }
        numeros.splice(i-quantiZero, i-1);

    }
}
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}
console.log(soma)