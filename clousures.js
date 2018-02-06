
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

 saludarSilva("Pedro")
 saludarSilva("Ingrid")
 saludarSilva("Silva")
 saludarSilva("Juan")

 // función que me permita crear prefijos para las palabras 

