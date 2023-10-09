let num1 = Number(prompt('Digite um numero:'))
let num2 = Number(prompt('Digite outro numero:'))
let valor = Number(prompt('Digite a operação numerica:' + '\n1 = +; \n2 = -; \n3 = *; \n4 = /'))

switch(valor){
    case 1:
        console.log(`${num1} + ${num2} = ${num1 + num2}`)
        break;
    case 2:
        console.log(`${num1} - ${num2} = ${num1 - num2}`)
        break;
    case 3:
        console.log(`${num1} * ${num2} = ${num1 * num2}`)
        break;
    default:
        console.log(`${num1} / ${num2} = ${num1 / num2}`)
        break;    
}

