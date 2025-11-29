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

-------------------------------------------- 2
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
  console.log(numero) // Vais escrever no terminal: 5
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

# **Loops e interação:**

## **O que é um Laço de Repetição?**

Um laço de repetição (ou _loop_) é uma estrutura que permite que um conjunto de instruções ou um bloco de código seja executado repetidamente com base em uma condição estabelecida ou um número predefinido de vezes. Em linhas gerais, um laço de repetição é uma forma de se repertir um comando a quantidade de vezes que você desejar.

## **Como funciona um laço de repetição?**

1º Definimos uma variável de controle ou contador para começar.

2° Nós definimos uma condição ou um número de vezes que queremos realizar as repetições.

3º A variável de controle, já definida, pode fazer 2 coisas:

1. Se definirmos uma condição no 2º passo: 
    - A variável de controle é responsável por realizar a verificação dessa condição até quando ela for verdadeira. Ou seja, **Enquanto** ela for Verdadeira, a variável de controle executa o comando que o usuário defenir, quando ela for Falsa, o loop é encerrado. Então, o código definido no loop é executado repetidas vezes até que a condição seja falsa.
    
2. Se pré-definirmos um número de repetições:
    - A variável de controle executa o comando a quantidade de vezes definida pelo usuário, o que chamamos de intervalo.

## **Qual a principal função de um laço de repetição?**

A sua principal função é ser a peça-chave para realizar uma Iteração. 

Mas o que é uma Iteração?

## **O que é Iteração?**

É o processo de repetição de um código, intrução ou comando dentro de um programa. Resumindo, o 3º passo que definimos anteriormente é uma Iteração, pois a variável de controle verifica a condição, por exemplo, e se esta for verdadeira ele executa o código repetidas vezes, esse processo de repetição é uma Iteração. 

Uma Iteração é algo fundamental para uma linguagem de programação, pois facilita a realização de códigos e comandos longos.

## **Bem, agora que entendemos o que é um laço de repetição e uma iteração, vamos ver como podemos executar laços na linguagem TypeScript:**

while

Iteração básica

Criar e commitar:

exemplos/loops.ts

Atualizar o README com:

Tipos de loops

Quando usar cada um

Importância: Mostra estruturas de repetição essenciais.

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




