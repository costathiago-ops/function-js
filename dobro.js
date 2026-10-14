/As três formas de função/
// function dobro(numero) {
//     return numero * 2;
// }


const dobro = (numero) => {
    return numero * 2;
}

console.log(dobro(4));

/Arrow function com chaves/
const triplo = (numero) => {
    return numero * 3;
}

console.log(triplo(4))

//Arrow function de uma linha//
const quadrado = (numero) => numero * numero;

console.log(quadrado(4))

///
//Parte 2 - passando funções//

function aplicar(numero, operacao) {
    return operacao(numero);
}

console.log(aplicar(5, dobro))
console.log(aplicar(5, triplo))
console.log(aplicar(5, quadrado))

//5 e 6 - Um arrow escrita na própria chamada com o numero 5

const resultado = aplicar(5, (numero) => {
    return numero + 100;
});

console.log(resultado, (dobro))

//não quebrou