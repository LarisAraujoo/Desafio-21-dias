let fome = ''
let dinheiro = ''
let ResAberto = ''

fome = prompt('Você está com fome?')
dinheiro = prompt('Você tem dinheiro?')
ResAberto = prompt('O restaurante preferido está aberto?')

if (fome === 'não' || dinheiro == 'não') {
    console.log('A janta será em casa!')
}else if (dinheiro === 'sim' && ResAberto == 'sim'){
    console.log('Hoje o jantar será no seu restaurante preferido!')
}else{
    console.log('Peça um delivery!')
}
