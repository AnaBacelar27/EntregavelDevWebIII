
console.log("BLOCO 1 – Fundamentos e Variáveis");


console.log("\n--- 1.1 let pontos ---");
let pontos = 50;
pontos += 10;
console.log(`Pontos: ${pontos}`); 


console.log("\n--- 1.2 const MAX_PONTOS ---");
const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 200; 
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
  console.log("Motivo: constantes (const) não podem ser reatribuídas após a declaração.");
}
console.log(`MAX_PONTOS continua valendo: ${MAX_PONTOS}`);


console.log("\n--- 1.3 Tipos primitivos e typeof ---");
const nome = "Ana";
const idade = 21;
const estaMatriculada = true;
let semValor; 
const vazio = null;

console.log(`nome            -> ${typeof nome}`);            
console.log(`idade           -> ${typeof idade}`);           
console.log(`estaMatriculada -> ${typeof estaMatriculada}`); 
console.log(`semValor        -> ${typeof semValor}`);        
console.log(`vazio           -> ${typeof vazio}`);           



console.log("\n--- 1.4 Template Literals x concatenação ---");
const curso = "Desenvolvimento Web";
const fraseTemplate = `Olá, meu nome é ${nome}, tenho ${idade} anos e estudo ${curso}.`;
const fraseConcatenada = "Olá, meu nome é " + nome + ", tenho " + idade + " anos e estudo " + curso + ".";
console.log("Template Literal:", fraseTemplate);
console.log("Concatenação:    ", fraseConcatenada);
console.log("As duas frases são iguais?", fraseTemplate === fraseConcatenada);


console.log("\n BLOCO 2 – Funções ");


console.log("\n--- 2.1 Função declarada (hoisting) ---");

console.log("ehMaiorDeIdade(20):", ehMaiorDeIdade(20));
console.log("ehMaiorDeIdade(15):", ehMaiorDeIdade(15)); 

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}


console.log("\n--- 2.2 Função de expressão (sem hoisting utilizável) ---");
try {
  ehMaiorDeIdadeExpressao(20); 
} catch (erro) {
  console.log(`${erro.name}: ${erro.message}`);
 
}

const ehMaiorDeIdadeExpressao = function (idade) {
  return idade >= 18;
};
console.log("ehMaiorDeIdadeExpressao(20):", ehMaiorDeIdadeExpressao(20)); 
console.log("ehMaiorDeIdadeExpressao(10):", ehMaiorDeIdadeExpressao(10)); 


console.log("\n--- 2.3 dobro: declarada, expressão e arrow function ---");
function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function (n) {
  return n * 2;
};

const dobroArrow = (n) => n * 2;

console.log("dobroDeclarada(4):", dobroDeclarada(4)); 
console.log("dobroExpressao(4):", dobroExpressao(4)); 
console.log("dobroArrow(4):    ", dobroArrow(4));     


console.log("\n--- 2.4 Parâmetro com valor padrão ---");
const dobroComPadrao = (n = 1) => n * 2;
console.log("dobroComPadrao():  ", dobroComPadrao());   
console.log("dobroComPadrao(7): ", dobroComPadrao(7));  

const saudar = (pessoa = "visitante") => `Olá, ${pessoa}!`;
console.log(saudar());       
console.log(saudar("Ana"));  


console.log("\n========== BLOCO 3 – Controle de Fluxo ==========");


console.log("\n--- 3.1 classificarNota (if/else) ---");
function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 8.5 ->", classificarNota(8.5)); 
console.log("Nota 6   ->", classificarNota(6));   
console.log("Nota 4   ->", classificarNota(4));   


console.log("\n--- 3.2 Semáforo (switch) ---");
const corSemaforo = "amarelo";

switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}


console.log("\n--- 3.3 Tabuada do 5 (for) ---");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\n--- 3.4 Contagem regressiva (while) ---");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--; 
}
console.log("Fim!");


console.log("\n--- 3.5 Par ou ímpar de 1 a 20 (for) ---");
for (let i = 1; i <= 20; i++) {
  const tipo = i % 2 === 0 ? "par" : "ímpar";
  console.log(`${i} é ${tipo}`);
}

console.log("\n--- 3.5 Par ou ímpar de 1 a 20 (while) ---");
let numero = 1;
while (numero <= 20) {
  if (numero % 2 === 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é ímpar`);
  }
  numero++;
}


console.log("\n--- 3.6 diaDaSemana (switch) ---");
function diaDaSemana(numero) {
  switch (numero) {
    case 1:
      return "Domingo";
    case 2:
      return "Segunda-feira";
    case 3:
      return "Terça-feira";
    case 4:
      return "Quarta-feira";
    case 5:
      return "Quinta-feira";
    case 6:
      return "Sexta-feira";
    case 7:
      return "Sábado";
    default:
      return "Número inválido! Informe um valor de 1 a 7.";
  }
}

for (let n = 1; n <= 7; n++) {
  console.log(`${n} -> ${diaDaSemana(n)}`);
}
console.log(`9 -> ${diaDaSemana(9)}`);
console.log(`0 -> ${diaDaSemana(0)}`);
