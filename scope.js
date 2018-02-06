/*1.- caso */

var nombre = "Susana" //  global
function saludar (nombre){  //si yo le pongo el mismo nombre al parámetro recibe local
	console.log(`Hola soy ${nombre}`) // take the global variable
}
saludar("Ingrid") //toma el segundo por local
console.log(`La variable nombre tiene el valor ${nombre}`)

// take the global variable ()

/*2.- Caso*/

var nombre = "Susana" //  global
function saludar (){  
	var nombre = "Eric" //la variable nombre se reduce al scope que está en la función 
	console.log(`Hola soy ${nombre}`) // take the global variable
}
saludar() //toma el segundo por local
console.log(`La variable nombre tiene el valor ${nombre}`)

// take the global variable ()

/*3. hoisting*/

var nombre = "Susana" //  global
function saludar (){  
	var nombre  //hoisting: sube el valor de las variables
    if (true){
    	nombre = "Eric"
    }  
    console.log(`Hola ${nombre}`)
}
saludar() //toma el segundo por local
console.log(`La variable nombre tiene el valor ${nombre}`)

/*4.- funcion que salude 10 veces.*/

function saludar10 (nombre){  
	for (var i = 0; i<10; i++) {
    console.log(`Hola ${nombre}`)
 }
 console.log(`El valor de i es:  ${i}`)
}
saludar10("Susana")

/*5.- debemos evitar contaminar el códido
*/
function saludarSu (){  
	const nombre = "Susana"
	for (let i = 0; i<10; i++) {
    console.log(`Hola ${nombre}`)
 }
}
