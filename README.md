# **Guia para iniciantes na linguagem TypeScript**
Repositório criado com intuito de servir como um guia, para iniciantes em typescript.

## **O que é typescript?**
- TypeScript é uma linguagem baseada no JavaScript que adiciona tipagem estática opcional, O typescript foi criado para tornar o desenvolvimento mais seguro, organizado e escalável, especialmente em aplicações grandes e complexas, por ser um superset do JavaScript, todo código JavaScript é válido em TypeScript, mas o TypeScript adiciona recursos extras, como:

- Tipos estáticos
- Classes e interfaces
- Suporte avançado a orientação a objetos
- Verificação de erros antes da execução

Além disso, o TypeScript melhora a produtividade e reduz erros, sem substituir o JavaScript, apenas o complementa.

## **Quem criou o typescript?**
- O TypeScript foi criado pela Microsoft e a equipe foi liderada pelo engenheiro de software Anders Hejlsberg, que também é conhecido por criar linguagens como C# e Delphi. O desenvolvimento inicial começou em 2010, e o lançamento público ocorreu em 2012.  

## **Para que serve?**
- O TypeScript serve para adicionar tipagem estática e recursos modernos ao JavaScript, tornando-o ideal para aplicações grandes e complexas. Ele ajuda a identificar erros de tipo durante o desenvolvimento, antes da execução do código, o que aumenta a produtividade, a organização e a manutenção do código, além de melhorar a experiência do desenvolvedor.

## **Onde é usado**
- O TypeScript é amplamente utilizado em diversas áreas do desenvolvimento de software, abrangendo desenvolvimento web (frontend e backend), mobile e aplicações empresariais de grande escala. Como um superset do JavaScript que adiciona tipagem estática, ele oferece mais segurança e robustez ao código. 

## **Prós e Contras do TypeScript**

### **Prós**

* Tipagem estática.
* Ajuda a detectar erros antes da execução.
* Melhora a organização em projetos grandes.
* Ótimo suporte em editores como VSCode.
* Facilita a manutenção do código.

### **Contras**

* Requer compilação.
* Pode ser mais verboso que JavaScript.
* Exige configuração inicial.

---

## **Instalação do TypeScript**

### **Windows**

1. Instalar o Node.js.
2. Abrir o CMD ou PowerShell.
3. Instalar o TypeScript globalmente:

```
npm install -g typescript
```

4. Verificar a instalação:

```
tsc -v
```

### **Linux (Ubuntu/Debian)**

```
sudo apt install nodejs npm
sudo npm install -g typescript
tsc -v
```

---

## **Como compilar e executar**

Para compilar um arquivo TypeScript (`.ts`) para JavaScript (`.js`):

```
tsc arquivo.ts
```

Para executar o arquivo gerado:

```
node arquivo.js
```

---

# **Tipos básicos e variáveis**

## Variáveis:
- Antes de entender os tipos primitivos (tipos básicos), precisamos entender o que é uma variável. Imagine que uma variável é como uma caixa, e essa caixa só cabe uma coisa por vez. Sempre que precisarmos colocar algo novo, teremos que tirar o que já estava nela. A variável funciona exatamente assim: ela guarda um dado, e sempre que colocamos um novo dado, ela descarta o antigo, porque só aceita um valor por vez.
- **Declaração de uma variável**:
  - Para declarar uma variável podemos usar duas palavras-chave: let e const. Depois delas, precisamos escolher um nome, assim:
     ``` ts
     let nome;
     // ou
     const nome;
     ```
  - Para dar um valor à variável, usamos o sinal de igualdade, assim:
     ``` ts
     let nome = 'dado'
     // ou
     const nome = 'dado'
     ```
    observações importantes:
     - O sinal de igualdade não significa igualdade e sim que a variável recebe um dado.
     - `//` (duas barras) usamos na frete do texto que queremos comentar o código (não será lido pela maquina).

  - **Em que momento usar `let` ou `const`?**
    - `let`:
      Usamos quando queremos declarar uma variável que pode ser alterada depois. É a opção que vamos usar na maioria das vezes.
    - `const`:
      Usamos quando o valor não pode ser alterado depois da primeira declaração. Ou seja, ela não muda.

## Tipos primitivos:
- Os tipos primitivos são os tipos de dados mais básicos e fundamentais da linguagem **Javascript**, O **TypeScript** apenas faz uma tipagem mais rígida desses valores. Os tipos primitivos mais conhecidos são:

- ### String:
  - A **String** é um tipo de dado que representa texto, ela é escrito colocando os caracteres entre apas como: apas duplas (""), simples ('') ou crases (``), qualquer caractere escrito dentro deles será considerado uma **string** inclusive números.
  - Exemplo:
   ``` ts
   let nome_usuario;
    
   // string usando apas duplas.
   nome_usuario = "Pedrinho"
    
   // string usando apas simples.
   nome_usuario = 'Tony'
 
   // string usando crases:
    nome_usuario = `Garibaldo`
   ````

- ### Number:
  - O **Number** é um tipo dado que representa qualquer valor númerico seja número inteiros, decimais ou número mais complexos, ele aceita qualque operação matemática como adição (`+`) subtração (`-`) divisão (`/`) multiplicação (`*`) e etc..
  - Exemplo:
  ``` ts
  let numero1 = 2
  let numero2 = 3
  let numero = numero1 + numero2
  console.log(numero) // Vai escrever no terminal: 5
  ```
  Observações importantes:
   - 2 é um Number (numero) e "2" é uma String, ou seja não é possive somar os dois como números, caso some será feita uma concatenação (junção de textos).
      Exemplo:
       ``` ts
       let numero1 = 2
       let numero2 = "2"
       let numero = numero1 + numero2
       console.log(numero) // Vai escrever no terminal: 22
       ```
   - `console.log()` usamos pra escrever no terminal, o conteúdo sempre fica entre parenteses. Exemplo: `console.log('Olá, Mundo!')`

- ### Boolean:
  - O **Boolean** é um tipo de dado que só tem dois valores, sendo eles ``true``(verdadeiro) ou ``false``(falso). Ela é usado quando precisamos tomar decisões importantes no nosso código, como por exemplo comparar valores ou verificar se uma função é verdadeira.

- ### Entrada e Saída de Dados:
  Para que um programa seja útil, ele geralmente precisa se comunicar com o mundo exterior. Ele precisa receber informações (Entrada/Input) e mostrar resultados (Saída/Output). Vamos entender como fazer isso no TypeScript rodando no ambiente Node.js.

- ## Saída de Dados (Output):
A saída de dados é a forma como o programa "fala" com o usuário. No nosso caso, usamos o terminal para mostrar essas mensagens.

console.log()
O comando mais famoso e utilizado para isso é o console.log(), Ele serve para imprimir textos, números, variáveis ou resultados de contas no terminal.

Como funciona: Tudo que você colocar dentro dos parênteses do console.log() será exibido.
Exemplo:let mensagem: string = "Olá, TypeScript!";
let nota: number = 10;
``` ts
// Imprimindo um texto direto
console.log("Iniciando o sistema...");

// Imprimindo variáveis
console.log(mensagem);
console.log(nota);

// Imprimindo texto misturado com variáveis (Interpolação)
console.log(`O aluno tirou nota: ${nota}`);
```

- ## Entrada de Dados (Input):
A entrada de dados é a forma como o usuário "fala" com o programa. Diferente de algumas linguagens que possuem um comando simples como leia() ou input(), no TypeScript (usando Node.js), a entrada de dados nativa exige um pouquinho mais de código, pois o Node trabalha com eventos e para capturar o que o usuário digita no terminal, usamos um módulo nativo chamado readline.

- Como usar o readline?
Imagine o readline como um "porteiro" que fica observando o que você digita no teclado e avisa o programa quando você aperta "Enter". Para usá-lo, precisamos seguir 4 passos básicos que são: importar o módulo, criar a interface de comunicação, fazer a pergunta e fechar a comunicação.

Exemplo prático:
``` ts
// 1. Importamos o módulo readline
import * as readline from 'readline';

// 2. Criamos a interface configurando a entrada (teclado) e saída (terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Fazemos a pergunta
// O texto entre aspas é a pergunta que vai aparecer
// A 'resposta' é a variável que vai guardar o que o usuário digitar
rl.question('Qual é o seu nome? ', (resposta) => {
  
  // Aqui dentro acontece a mágica com o dado recebido
  console.log(`Muito prazer, ${resposta}!`);

  // 4. Fechamos a interface para encerrar o programa
  rl.close();
});
```
- ## Arrays e Interfaces:
- Arrays (Listas): Muitas vezes precisamos guardar vários dados em uma única variável, para isso usamos os Arrays (listas), no TypeScript, definimos o tipo do dado seguido de [].

``` ts
// Lista de números
let notas: number[] = [10, 8, 7.5];

// Lista de textos
let nomes: string[] = ["Johnny", "José", "Pedro"];

// Acessando um item (começa sempre do 0)
console.log(nomes[0]); // Imprime: Johnny
```

- Interfaces (Objetos): Enquanto arrays guardam listas, os Objetos agrupam informações sobre uma coisa só (ex: um usuário tem nome, email e idade). As Interfaces servem para criar o "molde" desse objeto, garantindo que ele tenha todas as propriedades certas.

``` ts
// 1. Criamos o molde (Interface)
interface Pessoa {
  nome: string;
  idade: number;
}

// 2. Criamos a variável usando esse molde
let usuario: Pessoa = {
  nome: "Johnny",
  idade: 21
};

console.log(usuario.nome); // Imprime: Johnny
```

- ## Tipagem de variáveis
  Agora que aprendemos os tipos primitivos e o que é uma variável, vamos definir o tipo de uma variável. Antes disso, precisamos entender a diferença entre tipagem dinâmica e tipagem estática:

    -  ### Tipagem dinâmica:
        A tipagem dinâmica dá mais liberdade sobre o dado que uma variável pode receber. Ela está presente em muitas linguagens, como o **JavaScript**. Nelas, você pode atribuir qualquer tipo de dado à mesma variável, seja string, number, boolean etc. Ou seja, você pode ter uma variável que antes guardava um número e depois passar a guardar uma string, o tipo dela muda de acordo com o valor que está armazenando no momento.

    -  ### Tipagem statica:
        Na tipagem estática, que é justamente a tipagem do TypeScript, também chamada de tipagem forte precisamos declarar o tipo da variável, o tipo deve ser único não pode ser mudado, ou seja, diferente da tipagem dinâmica, por exemplo quando declaramos uma variável do tipo number e depois colocamos ela pra receber uma string ou qualquer tipo diferente, o compilador irá apresentar erro, pois as variáveis só irá aceitar dados do seu tipo.

        -  **Declarando o Tipo de uma Variável**:
            -  No **TypeScritp** quando criamos uma variável e atribuimos um valor, ela automaticamente irá se tornar uma várivel do tipo do primero valor que ela receber, por exemplo: `let nome = "Jose"`; nesse caso a variável terá seu tipo definido como string, e caso tente atribuir um tipo de dado diferente a ela, não irá funcinar.
            - Podemos definir seu tipo sem necessariamente adicona um valor, dessa forma: `let numero: number;` ou `let nome: string = "Jose"`; essa é forma mais recomendada e usada, sempre que for declarar uma variável declare o seu tipo dessa forma.

  - ### Exemplo de variavei com tipos:
    - Agora que aprendemos o básico sobre variáveis e tipos, vamos vê alguns exemplos bacanas de como podemos usar elas no nosso código:
      [Usando variáveis no TypeScritp](Exemplos/variaveis.ts)

## Operadores básicos
  - Em qualquer linguagem de programação existem operações com números, e no TypeScript não é diferente. As operações mais básicas são: adição (+), subtração (-), divisão (/), resto da divisão (%), multiplicação (*) e potência (**). É importante ficar atento à ordem de precedência, representada na tabela abaixo:

    ### Tabela de ordem de precendência
    |nomes    | Simbulos            |
    |---------|---------------------|
    |parenteses |( )                |
    |potencia|**                    |
    |multiplicação, divisão, resto| *, /,  %|
    |adição, subtração| +, -        |

 - **Aqui vai alguns exemplos de como usar:**
  [Usando operados matemáticos no TypeScript](Exemplos/operadores.ts)

-------------------------------------------- 3
# **Estruturas Condicionais no TypeScript**


No TypeScript, as estruturas condicionais permitem executar blocos diferentes de código dependendo do resultado de expressões booleanas (true/false), isto é se a condição é atendida ou não. As mais usadas são:
- if
- else if
- else

Estruturas condicionais permitem que o programa tome decisões com base em condições assim como na vida real essas condições nos cercam o tempo todo, pense: ao sair de casa, ao abrir a porta, 
 - se(if) estiver chovendo -> você irá voltar para pegar o guarda-chuva
 - se não(else) estiver chovendo -> você poderá sair
   
``` ts
 let chovendo: boolean = true;
 let pegarGuardaChuva: boolean;

 if (chovendo) {
   pegarGuardaChuva = true;
 } else {
   pegarGuardaChuva = false;
 }
```

Também caso a condição primeira não for atendida é possível adicionar mais uma condição a ser verificada em seguida, por exemplo, você está fazendo uma pesquisa para descobrir quantas pessoas da sua família podem ou não votar, ao perguntar você terá as condições/possibilidades:
 - se(if) a idade for maior ou igual a 18 -> é maior de idade e pode votar
 - se não, verifique se(else if) a idade for maior ou igual a 16 e menor que 18 -> pode votar mas ainda não é maior de idade
 - se não(else) é menor de idade

``` ts
 const idade: number = 17;

 if (idade >= 18) {
   console.log("Você é maior de idade.");
 } else if (idade >= 16) {
   console.log("Você pode votar, mas ainda não é maior de idade.");
 } else {
   console.log("Você é menor de idade.");
 }
```

### *Tá, mas por que isso é importante?*

As estruturas condicionais definem como o programa reage a diferentes situações, permitindo criar:
  - validações
  - fluxos de decisão
  - menus interativos
  - regras de negócio
    
Elas são fundamentais em qualquer linguagem de programação.

## **Operadores Lógicos nas Condicionais**

Além das comparações básicas (>, <, ==, etc.), o TypeScript permite combinar condições usando **operadores lógicos**. Esses operadores ajudam a criar verificações mais completas e detalhadas.

### **Principais operadores lógicos**

| Operador | Nome        | O que faz                                      | Exemplo                     |
|----------|-------------|------------------------------------------------|-----------------------------|
| `&&`     | E lógico    | Verdadeiro se **todas** as condições forem verdadeiras | `idade >= 18 && cadastrado` |
| `\|\|`     | OU lógico   | Verdadeiro se **pelo menos uma** condição<br> for verdadeira |  `temIngresso \|\| estaNaLista`    |
| `!`      | Negação     | Inverte o valor lógico                          | `!logado`                   |


### **Exemplo prático**

Imagine que você quer liberar o acesso a uma área restrita somente para quem **estiver logado** e **for administrador** em um sistema:

```ts
const logado = true;
const admin = false;

if (logado && admin) {
  console.log("Acesso liberado para administradores.");
} else {
  console.log("Acesso negado: permissões insuficientes.");
}
```
E um caso onde basta cumprir **uma** das condições:

```ts
const temIngresso = false;
const estaNaLista = true;

if (temIngresso || estaNaLista) {
  console.log("Pode entrar.");
} else {
  console.log("Entrada não permitida.");
}
```

 - **Aqui vai alguns exemplos de como usar:**
  [Utilizando estruturas de condição e operadores lógicos em TypeScript](Exemplos/condicoes.ts)

-------------------------------------------- 4 

# **Loops e Iteração:**

## **O que é um Laço de Repetição?**

Um laço de repetição (ou _loop_) é uma estrutura que permite que um conjunto de instruções ou um bloco de código seja executado repetidamente com base em uma condição estabelecida ou um número predefinido de vezes. Em linhas gerais, um laço de repetição é uma forma de se repertir um comando a quantidade de vezes que você desejar.

## **Qual a principal função de um laço de repetição?**

- A sua principal função é ser a peça-chave para realizar uma Iteração.

Mas o que é uma Iteração?

## **Iteração**

- É o processo de repetição de um código, instrução ou comando dentro de um programa.

## **Como funciona um laço de repetição em TypeScript?**

Assim como em outras linguagens, existem dois tipos de laços de repetição no TypeScript:

- A estrutura WHILE;
- A estrutura FOR.

Essas estruturas são semelhantes, mas possuem suas diferenças. Vamos entender como cada uma funciona:

### **WHILE:**

  Antes de começar, vale destacar que ambas as estrutras utilizam a validação de uma condição ou um teste lógico para realizar suas iterações. Para o While, esse teste lógico é feito da seguinte forma: 

- **ENQUANTO** a condição estabelecida for verdadeira, execute o comando que o usuário definir. Ou seja, com o While, enquanto o teste lógico verificar que a condição estabelecida é verdadeira, o comando é executado, quando for falsa, o _loop_ é encerrado.

Podemos vizualizar da seguinte forma:

``` ts
let c: number = 1

while (c < 5) {
    console.log(c)
    c++
}
``` 

let c: number = 1 - variável c, do tipo number, e atribuímos a ela o valor 1; 

while (c < 5) - laço While que podemos ler como: Enquanto c for menor que 5, execute o comando console.log(c);

c++ - o incremento c++ que podemos ler como: a cada iteração(laço), incremente 1 ao valor de c.

Explicando:

#### A variável c, que possui o valor 1, é utilizada para fazer a validação da condição: enquanto c for menor que 5. Dentro do laço while, delimitado pelas chaves, colocamos o comando que desejamos que seja executado enquanto a condição for verdadeira e ainda dentro do while adicionamos o incremento c++ (c = c + 1) que serve para incrementar o valor 1 à variável c enquanto a condição for verdadeira.

#### Então o que acontece no código acima é: c é inicialmente definida como 1 e no teste lógico queremos imprimir todos os valores que forem menor que 5, assim, como o valor inicial de c é menor que 5, a condição é verdadeira, 1 < 5. Logo, o código imprimirá o valor 1, então haverá o incremento de 1 ao valor de c que agora será 2, depois disso, o _loop_ é refeito já que a condição foi verdadeira e agora o teste lógico será feito com o valor 2 que continua sendo menor que 5, então a mesma coisa acontece, imprimi-se o númerro 2, acontece o incremento e o _loop_ é refeito. Isso acontece enquanto a condição for verdadeira, quando o valor de c for 5, ele fará o teste mais uma vez e agora o valor 5 não é menor que 5, então a condição é falsa e só agora o _loop_ é encerrado e a saída desse código é a impressão na tela dos nnúmeros de 1 até 4.

Se quisermos imprimir os números de 1 até 5, basta adicionar o "=" no teste lógico:

``` ts
let c: number = 1

while (c <= 5) {
    console.log(c)
    c++
}
```

### **Para esse tipo de Laço de Repetição damos o nome de Estrutura de Repetição com Teste Lógico no Início e esse tipo sempre seguirá a seguinte forma:**

``` ts
while (condição) {
  //código a ser executado 
  + 
  //incremento
}
```

### Existe também um outro tipo de estrutura while:

### **Estrutura de Repetição com Teste Lógico no Final (do while)**

- ### Ele segue a mesma lógica do outro tipo, a qual já detalhamos acima, a única coisa que muda é a ordem em que o teste lógico é executado, esse tipo de estrutura sempre seguirá a seguinte forma:

``` ts
do {
  //código a ser executado
  + 
  //incremento
} while (condição)
```

Exemplo: 

``` ts
let c: number = 1

do {
    console.log(c)
    c++
} while (c <= 5)
```

### Note que a única coisa que mudou foi a posição onde o teste lógico foi colocado, mas o raciocínio e a lógica são as mesmas:

- Quando usamos While, o teste lógico é feito no início e podemos ler o código da seguinte forma: "Enquanto a condição for verdadeira, execute o código";
- Já quando utilizamos o do while, o teste lógico é feito no final e podemos ler o código da seguinte forma: "Execute o código, enquanto a condição for verdadeira".

### Por isso, fica a critério do usuário escolher qual dos dois utilizar, pois possuem a mesma lógica e ambos resultaram na mesma saída.


### **FOR:**

A laço de repetição FOR possui a mesma função do While, repetir informações de um código. O que difere um do outro é que o for, é ideal para iterações com um número de vezes determinado, diferente do While que é usado para repetições indeterminadas que dependem da condição.

- #### Ele é utilizado especificamente para casos onde se sabe quantas vezes o código deve ser executado. Porém, assim como o while, temos que utilizar uma expressão de condição para determinar se o laço deve continuar a ser executado e essa condição é baseada no números de repetições que queremos dar ao _loop_.

### O Funcionamento da Laço:

- Sempre que utilizarmos o for, devemos seguir a seguinte estrutura:

``` ts
for (inicialização; condição; incremento) {
  // Código a ser executado repetidamente
}
```
***Obs: Sempre devemos seguir essa ordem de precedência, não podemos alterá-la! E sempre separamos elas por " ; ".**

Explicando:

- **Inicialização:** determina o valor inicial da variável que contralará a contagem do _loop_, a essa variável, damos o nome de variável de controle.
- **condição:** ocorre a validação da condição: 
  - Se ela for verdadeira, o bloco de código do for é executado.
  - Se ela for falsa, o laço é encerrado e o programa continua após o bloco for.
- **Incremento:** se a condição for verdadeira a cada iteração, é adicionado o incremento de 1 ao valor da variável de controle.

Isso se repete, em _loop_, até que a condição seja falsa, ou seja, até que a variável de controle não pertença mais ao intervalo de números predefinidos na condição.

Exemplo:

``` ts
for (let c: number = 0; c < 10; c++) {
    console.log(c)
}
```
No exemplo acima, temos:

- Inicialização: let c: number = 0;
- Condição: c < 10;
- Incremento: c++.

#### A variável de controle c, inicialmete definida com o valor 0, faz a verificação da condição, como c = 0 e 0 < 10, então c é menor que 10, por isso, a condição é verdadeira. Logo, o código imprimirá o valor 0, então haverá o incremento de 1 ao valor de c que agora será 1, depois disso, o _loop_ é refeito já que a condição foi verdadeira. A variável de controle, agora com valor = 1 fará mais uma vez a verificação da condição, c = 1 e 1 < 10, então c é menor que 10, o que satisfaz a condição e a mesma coisa acontece, o console imprimirá o valor 1, o incremento de 1 será adicionado ao valor de c que agora será 2 e o _loop_ é refeito. 

#### Isso acontecerá **Até que** c possua um valor que não seja menor que 10, então quando c = 10, a iteração do exemplo anterior é interrompida e o laço é encerrado. A saída para esse exemplo será os números de 0 até 9.

Se quisermos imprimir os números de 0 a 10, basta adicionar o "=" na condição:

``` ts
for (let c: number = 0; c <= 10; c++) {
    console.log(c)
}
```

Note que, ao usar o for não utilizamos a palavra **enquanto**, pois há uma quantidade específica de vezes que queremos realizar aquela iteração, que nesse caso foi 10, mas sequiséssemos que fosse de 1 até 20, por exemplo, era só colocar no código o valor 20 na condição. Perceba que há a diferença:

- Para o for, podemos interpretá-lo como: "Execute esse comando até que a variável de controle seja (limite determinado)"
- Para o While, podemos interpretá-lo como: "Enquanto a condição for verdadeira execute esse comando (não há um limite determinado)"

### Quando utilizar for ou While:

- Utilize **For** quando souber o limite de iterações, ou seja, quando souber a quantidade de repetições que deseja executar.
- Utilize o **While** quando não souber o limite de iterações, ou seja, quando não souber a quantidade de repetições que deseja executar.

### Observações:

#### (1) Tome muito CUIDADO para não executar _loops_ infinitos! Um _loop_ infinito ocorre quando um bloco de código de repetição é executado infinitas vezes porque a condição de saída nunca é alcançada, pois a validação da condição é sempre verdadeira.

Ex.:

``` ts
let c: number = 1

while (c < 5) {
    console.log(c)
}
```

Perceba que nesse bloco não há o incremento c++, e por causa disso, esse código nos levaria para um _loop_ infinito, uma vez que o valor de c é definido como igual 1 e esse valor é sempre < 5, ou seja, como não há nennhum incremento ao valor de c, ele nunca deixará de ser menor que 5, então esse código resultará em infinitas impressões do número 1 no console. O que é um _loop_ infinito.

Tome muito cuidado para não cair em laços infinitos, uma maneira de contornar isso é sempre definir um incremento (n++) dentro da estrutura de repetição de cado laço!

#### (2) O laço de repetição For também pode ser usado para percorrer arrays ou listas. Essa é uma funcionalidade extremamente importante e que aprenderemos logo a seguir!


-------------------------------------------- 5
# **Funções**

## **Funções em TypeScript**

As funções são blocos de código que executam uma tarefa específica.
No TypeScript, podemos definir tipos para os parâmetros e para o retorno, deixando o código mais seguro e evitando erros durante o desenvolvimento.

## **Importância das funções**
As funções são o principal ponto onde a tipagem estática atua. Seu modo de funcionamento é quase igual ao java script basico, nele Você define o tipo de cada parâmetro e também o tipo do valor que a função deve retornar. Assim, o retorno entrega o valor para quem chamou a função, aplicando a tipagem estática e garantindo segurança no código , além de possibilitar a reutilização de blocos previamente criados sem precisar repeti-los.

### **Função simples**
A função simples é a mais básica. Primeiro declaramos seu nome, depois definimos um parâmetro (com o tipo dele) e, por fim, o tipo do retorno, neste exemplo de codigo ela retornara um simples olá, com o nome escrito pelo usuario

```ts
function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}
```

### **Parâmetros tipados**
a função com parâmetros tipados especifica o tipo dos dois parametros, assim evitando algum possivel erro de tipagem ao um valor incorreto ser passado a ela, por exemplo neste codigo aqui, essa função somar exige que o tipo dos dois parametros sejam do tipo **number** ,pois ela ira retornar uma soma desses dois parametros

```ts
function somar(a: number, b: number): number {
  return a + b;
}
```

### **Retorno tipado**
a função recebe um número e retorna outro número. Caso você tentasse retornar um valor de outro tipo, o TypeScript avisaria imediatamente. Isso torna o código mais prevísivel.

```ts
function dobrar(valor: number): number {
  return valor * 2;
}
```

### **Parâmetro opcional**
O msg? significa que esse parâmetro é opcional. Se a função for chamada sem argumento, ela usa a expressão ?? para exibir um texto padrão. O tipo **void** indica que a função não retorna nada, apenas executa uma ação no console.

```ts
function mostrarMensagem(msg?: string): void {
  console.log(msg ?? "Nenhuma mensagem informada");
}
```

### **Valor padrão**
Se ninguém passar um nome para a função, ela usará "Visitante". Assim como neste exemplo de função, o retorno é void, indicando que nada é devolvido pela função. Extremamente util caso exista a chance de um dado não ser informado.
```ts
function apresentar(nome: string = "Visitante"): void {
  console.log(`Bem-vindo, ${nome}`);
}
```

### **Arrow function**

Essa função usa a sintaxe de seta => característica das arrow functions(função seta). Os parâmetros possuem tipos definidos e o retorno também é tipado. Apesar da sintaxe menor, ela funciona da mesma maneira que funções tradicionais e aplica perfeitamente a tipagem estática do TypeScript.

```ts
const multiplicar = (a: number, b: number): number => {
  return a * b;
};
```

### 




