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

-------------------------------------------- 2
# **Tipos básicos e variáveis**

## Tipos primitivos:
- Os tipos primitivos são os tipos de dados mais básicos e fundamentais da linguagem **Javascript**, que o **TypeScript** tipa de forma estrita que podem conter valores simples e imutáveis.
string, number, boolean

``let, const``

Template strings

 Criar e commitar:

exemplos/hello_world.ts

exemplos/variaveis_e_tipos.ts

Atualizar o README com:

Seção "Tipos básicos"

Seção "Exemplos: variáveis"

-------------------------------------------- 3
# **Estruturas Condicionais no TypeScript**


No TypeScript, as estruturas condicionais permitem executar blocos diferentes de código dependendo do resultado de expressões booleanas (true/false), isto é se a condição é atendida ou não. As mais usadas são:
- if
- else if
- else

Estruturas condicionais permitem que o programa tome decisões com base em condições assim como na vida real essas condições nos cercam o tempo todo, pense: ao sair de casa, ao abrir a porta, 
 - se(if) estiver chovendo -> você irá voltar para pegar o guarda-chuva
 - se não(else) estiver chovendo -> você poderá sair
   
<code>
 let chovendo: boolean = true;
 let pegarGuardaChuva: boolean;

 if (chovendo) {
   pegarGuardaChuva = true;
 } else {
   pegarGuardaChuva = false;
 }
</code>

Ou por exemplo, você está fazendo uma pesquisa para descobrir quantas pessoas da sua família podem ou não votar, ao perguntar você terá as condições:
 - se(if) a idade for maior ou igual a 18 -> é maior de idade e pode votar
 - se não, verifique se(else if) a idade for maior ou igual a 16 e menor que 18 -> pode votar mas ainda não é maior de idade
 - se não(else) é menor de idade

<code>
 const idade: number = 17;

 if (idade >= 18) {
   console.log("Você é maior de idade.");
 } else if (idade >= 16) {
   console.log("Você pode votar, mas ainda não é maior de idade.");
 } else {
   console.log("Você é menor de idade.");
 }
</code>

-------------------------------------------- 4 

# **Loops e interação:**

for
``for (var c = 1; c < 5; c++) {
    console.log(c);
}``

while

Iteração básica

Criar e commitar:

exemplos/loops.ts

Atualizar o README com:

Tipos de loops

Quando usar cada um

Importância: Mostra estruturas de repetição essenciais.

-------------------------------------------- 5
# **Funções, Instalação e Execução**

## **Funções em TypeScript**

As funções são blocos de código que executam uma tarefa específica.
No TypeScript, podemos definir tipos para os parâmetros e para o retorno, deixando o código mais seguro e evitando erros durante o desenvolvimento.

### **Função simples**

```ts
function saudacao(nome: string): string {
  return `Olá, ${nome}`;
}
```

### **Parâmetros tipados**

```ts
function somar(a: number, b: number): number {
  return a + b;
}
```

### **Retorno tipado**

```ts
function dobrar(valor: number): number {
  return valor * 2;
}
```

### **Parâmetro opcional**

```ts
function mostrarMensagem(msg?: string): void {
  console.log(msg ?? "Nenhuma mensagem informada");
}
```

### **Valor padrão**

```ts
function apresentar(nome: string = "Visitante"): void {
  console.log(`Bem-vindo, ${nome}`);
}
```

### **Arrow function**

```ts
const multiplicar = (a: number, b: number): number => {
  return a * b;
};
```

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
