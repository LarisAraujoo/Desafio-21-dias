function Calculadora(numero1, numero2, operador) {
    let resultado

    switch(operador){
        case "+":
            resultado = numero1 + numero2
            break;
        case "-":
            resultado = numero1 - numero2
            break;
        case "/":
            resultado = numero1 / numero2
            break;
        case "*":
            resultado = numero1 * numero2
            break;
        case "e":
            let contador = 1
            resultado = numero1 * numero1
            while (contador <=  numero2 - 1) {
                resultado = resultado * numero1
                contador ++
            }
            break;

    }

    if (resultado === undefined || resultado > 10000000)
    resultado = 'ERRO'

    console.log(resultado)
    return resultado
    


}
