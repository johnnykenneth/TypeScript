//Laço de Repetição While e do While

//Estrutura de Repetição com Teste Lógico no Final:

let c: number = 0

while (c <= 5) {
    console.log(c)
    c++
} // Imprime no console os números de 0 a 5


// Imprime no console: "1º Passo, 2º Passo e 3º Passo"

let p:number = 1

while (p <= 3) {
    console.log(`${p}º Passo`)
    c++
} 


// Contagem Regressiva de 10 a 1
console.log("\n--- Contagem regressiva de 10 a 1 ---")

let num:number = 10

while (num >= 1) {
    console.log(`...${num}`)
    num--
} // A saída serão os números em ordem decrescente de 10 a 1

//Obs: num-- = (num = num - 1)

// Imprime no console: "Contador atual: 0, Contador atual: 1, ....., Contador atual: 4"
let contador: number = 0
const limite: number = 5

console.log("Iniciando Contagem Simples: ")

while (contador < limite) {
    console.log(`Contador atual: ${contador}`)
    contador++
}

console.log("Contagem Concluída") 


//