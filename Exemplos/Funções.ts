// Função simples: recebe um nome e retorna uma saudação
function saudacao(nome: string): string {
  return `Olá, ${nome}!`;
}

// Função com parâmetro opcional: idade pode existir ou não
function mostrarIdade(nome: string, idade?: number): string {
  if (idade) {
    return `${nome} tem ${idade} anos.`;
  }
  return `${nome} não informou a idade.`;
}

// Função com valor padrão: desconto já vem definido como 10%
function aplicarDesconto(preco: number, desconto: number = 10): number {
  return preco - (preco * desconto) / 100;
}

// Função que não retorna nada (void): apenas mostra uma mensagem
function mostrarMensagem(msg: string): void {
  console.log(msg);
}

// Arrow function (função em formato curto): soma dois números
const somar = (a: number, b: number): number => a + b;

// Tipo personalizado para representar um usuário
type Usuario = {
  nome: string;
  email: string;
};

// Função que recebe um usuário e devolve o mesmo objeto
function criarUsuario(usuario: Usuario): Usuario {
  return usuario;
}

// Função assíncrona: simula carregar dados de um servidor
async function buscarDados(): Promise<string> {
  return "Dados carregados";
}

// Função assíncrona que usa 'await' para esperar o resultado de outra função
async function executar(): Promise<void> {
  const dados = await buscarDados();
  console.log(dados);
}

// Função que aceita dois tipos diferentes (number ou string)
function formatarId(id: number | string): string {
  return `ID: ${id}`;
}

// Função genérica: funciona com qualquer tipo de dado
function retornarValor<T>(valor: T): T {
  return valor;
}

// Função que recebe outra função como parâmetro (callback)
function executarOperacao(a: number, b: number, op: (x: number, y: number) => number): number {
  return op(a, b);
}
ç.ç.ç
// Função passada para o callback: multiplica dois números
const multiplicar = (x: number, y: number): number => x * y;
