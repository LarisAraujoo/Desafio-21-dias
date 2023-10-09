let nome = '';
let idade = 0;
let altura = 0;
let peso = 0;

nome = prompt('Qual o seu nome?');
idade = Number(prompt('Qual a sua idade?'));
altura = Number(prompt('Qual a sua altura?'));
peso = Number(prompt('Qual o seu peso?'));

let AnoNasc = 0;

AnoNasc = 2023 - idade;

let imc = 0;

imc = (peso / (altura*altura)).toFixed(2);

console.log('Olá, ' + nome + ' você têm ' + idade + ' anos, nasceu em ' + AnoNasc + ', tem ' + altura + ' de altura, pesa ' + peso + 'kg, seu IMC é ' + imc + 'kg/m²' );