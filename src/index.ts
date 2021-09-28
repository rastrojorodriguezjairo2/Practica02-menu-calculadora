import {leerTeclado} from './util/entradaTeclado'
//Creamos la variable función main que llamamos main 
let main = async () => {
    let n1 = Number
    let n2 = Number
    console.log("1º Suma")
    console.log("2º Resta")
    console.log("3º Multiplicar")
    console.log("4º Dividir")
    console.log("5º Salir")
    const opcion = await leerTeclado ('¿Qué operación quieres hacer?')
    if (opcion == "1"){
        const num1 = await leerTeclado('¿cual es el primer número para sumar?')
        let n1 = parseInt(num1)
        const num2 = await leerTeclado('¿cual es el segundo número para sumar?')
        let n2 = parseInt(num2)
        console.log(n1+n2)
    } else if (opcion == "2") {
        const num1 = await leerTeclado('¿cual es el primer número para restar?')
        let n1 = parseInt(num1)
        const num2 = await leerTeclado('¿cual es el segundo número para restar?')
        let n2 = parseInt(num2)
        console.log(n1-n2)
    } else if (opcion == "3") {
        const num1 = await leerTeclado('¿cual es el primer número para multiplicar?')
        let n1 = parseInt(num1)
        const num2 = await leerTeclado('¿cual es el segundo número para multiplicar?')
        let n2 = parseInt(num2)
        console.log(n1*n2)
    } else if (opcion == "4") {
        const num1 = await leerTeclado('¿cual es el primer número para dividir?')
        let n1 = parseInt(num1)
        const num2 = await leerTeclado('¿cual es el segundo número para dividir?')
        let n2 = parseInt(num2)
        console.log(n1/n2)
    } else if (opcion == "5") {
        console.log("Gracias por utilizar nuestra calculadora. Adios")
    } else {
        console.log("Eso no es una opción válida")
    }
} 
//invocamos a la función 
main();