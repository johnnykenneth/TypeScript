// 1 - CONDICOES COM COMPARACOES RELACIONAIS

// Exemplo 1.1 — Verificando a temperatura(comparações maior(>) e maior ou igual(>=))
const temperatura: number = 32;

// OBS: CASO A CONDIÇÃO NÃO FOR ATENDIDA O CÓDIGO DENTRO DO SEU BLOCO DELIMITADO PELAS CHAVES É IGNORADO
if (temperatura > 35) { 
  // Temperatura maior que 35 → calor extremo
  console.log("está muito quente");
} else if (temperatura >= 25) {
  // Entre 25 e 35 → clima moderado
  console.log("clima agradavel");
} else {
  // Se passar pelas duas verificações acima, significa:
  // - o valor não é maior que 35
  // - o valor não é maior nem igual a 25
  // Ou seja: está abaixo de 25 → clima frio
  console.log("esta frio, melhor levar um casaco");
}

// Exemplo 1.2 — Verificando saldo bancário(comparação "menor que"(<))
const saldo: number = 150;
const valorCompra: number = 200;

if (saldo < valorCompra) {
  // Saldo menor que o valor da compra → não pode comprar
  console.log("saldo insuficiente!");
} else {
  // Saldo é suficiente → pode comprar
  console.log("compra realizada com sucesso");
}

// Exemplo 1.3 — Tirando habilitação(comparação "menor ou igual"(<=))
const age: number = 20;

if (age <= 17) {
  // Idade menor ou igual a 17 → menor de idade, acesso negado
  console.log("menor de idade, acesso negado!");
} else {
  // Maior idade → pode se habilitar
  console.log("pode se habilitar");
}

// Exemplo 1.4 - Senha do banco(comparação diferente valor e tipo(!==) e diferente valor(!=))
let senhaInserida: any; 
const senhaUsuario: string = "1234"; 

if (senhaInserida !== senhaUsuario) {
  console.log("senha inserida está incorreta ou no formato errado."); 
} else if (senhaInserida != senhaUsuario) {
  console.log("senha incorreta, tente novamente.");
} else {
  console.log("acesso concedido.");
}

// 2 - CONDICOES COM COMPARACOES USANDO OPERADORES LÓGICOS

// Exemplo 2.1 — OR (||)
// No operador *||* para a condição ser verdade, tendo valores a e b, basta que pelo menos um deles seja verdade.

// Para entrar, precisa ter 18 anos OU ter autorização
const idade: number = 15;
const temAutorizacao: boolean = true;

if (idade >= 18 || temAutorizacao) {
  console.log("Entrada permitida no evento.");
} else {
  console.log("Entrada negada. Idade insuficiente e sem autorização.");
}

// Exemplo 2.2 — AND (&&)
// Tendo dois valores a e b, *&&* só é verdade se tanto a quanto b forem ambos verdade.
// Só abre a porta se TIVER a chave E a porta estiver trancada
const possuiChave = true;
const portaTrancada = true;

if (possuiChave && portaTrancada) {
  console.log("Você pode destrancar a porta.");
} else {
  console.log("Você não pode abrir a porta.");
}

// Exemplo 2.3 — Negação (!)
// ! inverte o valor lógico
const energiaAcabou = false;

if (!energiaAcabou) {
  // energiaAcabou = false → !false = true
  console.log("O computador está ligado e funcionando normalmente.");
} else {
  console.log("O computador desligou por falta de energia.");
}

// 3 - OPERADORES TERNARIOS

// digamos que você quer ir a praia no final de semana, porém, só vai sair de 
// casa até a praia se estiver fazendo sol. 

const diaEnsolarado:boolean = true;

// forma tradicional
//  if (diaEnsolarado == true) {
//    console.log("vamos à praia!");
//  } else {
//    console.log("irei ficar em casa.");
//  }

// agora com operador ternário:
const sair:string = diaEnsolarado == true ? "vamos à praia!" : "irei ficar em casa.";