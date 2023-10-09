let nome = ''
let idade = 0
let cnh = ''
let carro = ''

nome = prompt('Qual o seu nome?')
idade = Number(prompt('Qual a sua idade?'))
cnh = prompt('Você tem CNH?')
carro = prompt('Você tem carro?')

if (idade <= 18 || cnh === 'não'){
    console.log(`${nome}, você não pode dirigir`)
}else if (idade >= 18 && cnh === 'sim' && carro === 'não'){
    console.log(`${nome}, você pode dirigir, mas não tem carro.`)
}else{
    console.log(`${nome}, você será motorista!`)
}