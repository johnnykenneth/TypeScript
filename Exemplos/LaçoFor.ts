// Laço de Repetição FOR:


// Imprime no console os númeos de 1 a 5

for (let c: number = 1; c <= 5; c++) {
    console.log(c);
}


// Contagem Regressiva de 10 a 1

for (let i: number = 10; i >= 1; i--) {
    console.log(`Contagem Regressiva: ${i}`);
}


// Pulando de 2 em 2

for (let n: number = 0; n <= 10; n += 2) {
    console.log(`Números Pares de 0 a 10: ${n}`);
} // Em vez de incrementar de 1 em 1, usamos i += 2, para pular de 2 em 2.


// Somando valores de 1 a 10

let somatorio:number = 0;

for (let s: number = 1; s <= 10; s++) {
    somatorio += s;
} // Ao invés de incrementar 1, incrementamos o valorr de s, que a cada lçao será um valor diferente (somatorio = somatorio + s)

console.log(`A soma dos números de 1 a 10 é: ${somatorio}`);


// Criando a tabuada do 5

for (let t: number = 1; t <= 10; t++) {
    console.log(`5 x ${t} = ${5 * t}`);
}
// Saída:
/*
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
.
.
.
5 x 10 = 50
*/


// Construindo um padrão (Repetição de Caracteres)

let linhaEstrelas: string = "";
const max_estrelas: number = 5;

console.log("--- Construindo um padrão de estrelas ---");

for (let e: number = 1; e <= max_estrelas; e++) {
    linhaEstrelas += "*"; // Adiciona o caractere "*" à string a cada Iteração
    console.log(linhaEstrelas);
} 
// Saída: Também poddemos repetir caracteres para criar padrões
/*
*
**
***
****
*****
*/


// Usando o continue para pular um intervalo:

const limit: number = 10;
const pular_inicio: number = 5;
const pular_fim: number = 7;

for (let p: number = 1; p <= limit; p++) {
    if (p >= pular_inicio && p <= pular_fim) { // && = "and" - ambas as condições precisam ser verdadeiras
        console.log(`(Número ${p} pulado)`);
        continue; // Pula imediatamente a iteração atual e avança para p++
    }

    console.log(`Número Processado: ${p}`);
}
