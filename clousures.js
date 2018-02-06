
/*funcion que sirva para saludar a miembros de alguna familia */
function saludarFamilia (apellido){
	return function saludarunoFamilia(nombre){
		console.log(`Hola ${nombre} ${apellido}` )

	}
}
const saludarArce = saludarFamilia("Arce")
const saludarSilva = saludarFamilia("Silva")
//saludar los miembros de una familia


 saludarArce("Pedro")
 saludarArce("Ingrid")
 saludarArce("Silva")
 saludarArce("Juan")

 saludarSilva("Maria")
 saludarSilva("Elsa")
 saludarSilva("Ivan")
 saludarSilva("luis")

 // función que me permita crear prefijos para las palabras 
function usePrefijos (prefijo){
	return function nuevaPalabra(palabra){
      console.log(`${prefijo}${palabra}` )

	}
}
const prefijoRe = usePrefijos("in")
const prefijoIn = usePrefijos("re")
//saludar los miembros de una familia


 prefijoRe("Pedro")
 prefijoRe("Ingrid")
 

prefijoIn("Pedro")
prefijoIn("Ingrid")
 
 