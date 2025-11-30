//Laço de Repetição While e do While

//Estrutura de Repetição com Teste Lógico no Início:


// Imprime no console os números de 0 a 5

let c: number = 0;

while (c <= 5) {
    console.log(c);
    c++;
} 


// Imprime no console: "1º Passo, 2º Passo e 3º Passo"

let p:number = 1;

while (p <= 3) {
    console.log(`${p}º Passo`);
    c++;
} 


// Contagem Regressiva de 10 a 1

console.log("\n--- Contagem regressiva de 10 a 1 ---");

let num:number = 10;

while (num >= 1) {
    console.log(`...${num}`);
    num--;
} // A saída serão os números em ordem decrescente de 10 a 1

//Obs: num-- = (num = num - 1)


// Imprime no console: "Contador atual: 0, Contador atual: 1, ....., Contador atual: 4"

let contador: number = 0;
const limite: number = 5;

console.log("Iniciando Contagem Simples: ");

while (contador < limite) {
    console.log(`Contador atual: ${contador}`);
    contador++;
}

console.log("Contagem Concluída") 


// Somar números até exceder o valor 20:

let soma: number = 0;
let valor: number = 2;

while (soma <= 20) {
    soma += valor; // soma = soma + valor
    console.log(`Soma atual é ${soma}`);
} // Saída: "Soma atual é 2, Soma atual é 4,....,Soma atual é 20, Soma atual é 22" -> Para no 22 porque 20 é <= 20 então o laço só encerro no 22.



//Estrutura de Repetição com Teste Lógico no Final: Do...While


// Imprime no console os números de 1 a 5

let n: number = 1

do {
    console.log(n)
    c++
} while (n <= 5)


// Exemplo de Laço com break:

let num1:number = 1;

do {
    if (num1 == 8) {
        console.log(`Chegamos no número ${num1}. SAINDO DO LAÇO!`);
        break; // Encerra o laço imediatamente
    }

    console.log(num1);
    num1++;
} while (num1 <= 10); // Esse laço começa a contar do número 1 e está programado para para apenas no 10, porém com o comando "break", podemos interromper o laço quando desejarmos.


// Validação de Senha:

let senha: string = "incorreta";

do { // Simuulamos uma entrada
    if (senha == "incorreta") {
        console.log("Acesso bloqueado. Senha Incorreta!");
        senha = "python1234"; // Simulamos uma nova entrada após a primeira tentativa

    } else if (senha == "python1234") {
        console.log("Acessado Permitido! Senha Correta");
        break;
    }

} while (senha !== "python1234")


// LEMBRANDO QUE TODOS OS EXEMPLOS ACIMA PODEM SER FEITOS TANTO COM WHILE QUANTO COM DO...WHILE!