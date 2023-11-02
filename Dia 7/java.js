let mediaGeral = 0
let quantidadeHomem = 0
let quantidadeMulher7 = 0 
let maiorNotaHomem = 0
let contador = 1

while (contador <= 10) {
    nota = Number(prompt('Digite a nota do ' + contador + ' º aluno'))
    sexo = prompt('Digite o sexo do aluno (m/f)')

    if(sexo == 'm'){
        if(nota > maiorNotaHomem) {
            maiorNotaHomem = nota
        }
        quantidadeHomem++
    }

    if(sexo == 'f' && nota > 7){
        quantidadeMulher7++
    }
    mediaGeral += nota
    contador++
}

mediaGeral = mediaGeral / 10

console.log('A média geral dos alunos foi: ' + mediaGeral)
console.log('A quantidade de homens cadastrados foram: ' + quantidadeHomem)
console.log('A quantidade de mulheres que tiveram nota acima de 7, foram: ' + quantidadeMulher7)
console.log('A maior nota entre os homens, foi: ' + maiorNotaHomem)


