let valor
let quantidade
let opcao = prompt('bem vindo ao Interlagos. você deseja: ' + '\n1 - abastecer com alcool; \n2 - abastecer com gasolina; \n3 - calibrar os pneus')

switch (opcao) {
 case '1':
    valor = Number(prompt('Digite o valor desejado para abastecer:'))
    quantidade = valor / 3
    console.log(`Foram bastecidos ${quantidade} L de alcool. Obrigado, volte sempre!`)
    break;
 case '2':
    valor = Number(prompt('Digite o valor desejado para abastecer:'))
    quantidade = valor / 5
    console.log(`Foram abastecidos ${quantidade} L de gasolina. Obrigado, volte sempre!`)
    break;
 default:
    console.log('Pneus calibrados com sucesso. Volte sempre!')
    break;

}
