let nome = prompt('Qual o seu nome?')
let idade = Number(prompt('Qual a sua idade?'))
let peso = Number(prompt('Qual o seu peso?'))
let altura = Number(prompt('Qual a sua altura?'))
let profissao = prompt('Qual a sua profissão?')

console.log ('Olá, ' + nome + ' você tem ' + idade + ' anos, é ' + profissao + ', tem ' + altura + ' de altura e pesa ' + peso + 'kg.'  )


if (idade >= 18) {
    console.log('Você está liberado para consumir bebida alcoolica!')
} else {
    console.log('Você é menor de idade. Proibido consumir bebida alcoolica.')
}


let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('a sua idade em meses é: ' + meses)
console.log('A sua idade em semanas é: ' + semanas)
console.log('a sua idade em dias é: ' + dias)


imc = peso / (altura * altura)

if (imc < 18.5){
    console.log('Magreza')
} else if (imc >= 18.5 && imc <= 24.9){
    console.log('Normal')
} else if (imc >= 25 && imc <= 30){
    console.log("sobrepeso")
} else{
    console.log('Obesidade')
}

let anoAtual = 2023
let anoNasc = anoAtual - idade

console.log('Você nasceu em ' + anoNasc)

let anoVivido = anoNasc
let idadeAtual = 0

for(let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++
}

let continuar
do {
    continuar = prompt('Deseja inserir os dados novamente? (s/n)')
} while (continuar == "s")
