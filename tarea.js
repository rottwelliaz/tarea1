//Ejercicio 1
let nombre = "Francisco";
let edad = 21;
let tienemascotas = true;
console.log("El nombre es:",nombre,"\nSu edad es:",edad ,"\ntiene mascotas?", tienemascotas);

//Ejercicio 2
let n1 = 5;
let n2 = 10;
suma = n1 + n2;
console.log("La suma de",n1,"+",n2,"es:",suma);
resta = n1 - n2;
console.log("La resta de",n1,"-",n2,"es:",resta);
multiplicacion = n1 * n2;
console.log("La multiplicacion de",n1,"*",n2,"es:",multiplicacion);
division = n1 / n2;
console.log("La division de",n1,"/",n2,"es:",division);
//Ejercicio 3
function saludar(nombre) {
    return "Hola, " + nombre + "!";
}
console.log(saludar("Francisco"));
//ejercicio 4
let frutas = ["manzana", "pera", "naranja", "uva", "sandia"];
for (let i = 0; i < frutas.length; i++) {
    console.log("La fruta es:", frutas[i]);
}
//Ejercicio 5
let array = [1, 2, 3];
let numeros = []; 
for (let i = 0; i < array.length; i++) {
    numeros[i] = array[i] * 2; 
}
console.log("El nuevo array es:", numeros);
//Ejercicio 6
let personas = [
    { nombre: "Francisco", edad: 21 },
    { nombre: "Luciano", edad: 22 },
    { nombre: "Franco", edad: 23 }
];

personas.forEach(persona => {
    console.log("El nombre es:", persona.nombre);
});
//Ejercicio 7
let numeritos = [10, 2, 3, 11, 5];
let mayor5 = numeritos.filter(numeritos => numeritos > 5);
console.log("Los numeros mayores a 5 son:", mayor5);
//Ejercicio 8
let numerosasumar = [1, 2, 3, 4, 5];
let sumarnumeros = numerosasumar.reduce((suma, num) => suma + num, 0);
console.log("La suma de los numeros es:", sumarnumeros);
//Ejercicio 9
async function mensajeAsync() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Este es un mensaje después de 2 segundos.");
        }, 2000);
    });
}

async function ejecutar() {
    const mensaje = await mensajeAsync();
    console.log(mensaje);
}

ejecutar();
