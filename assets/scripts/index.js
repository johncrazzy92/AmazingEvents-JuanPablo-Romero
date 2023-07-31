let miNombre = "Juan Pablo";
let miApellido = "Romero";
let miEdad = 31;
let miMascota = "Puppy";
let edadMascota = 2;
console.log(miNombre,miApellido,miEdad,miMascota,edadMascota);
let nombreCompleto = miNombre + " " + miApellido;
let textoPresentacion = "hola!, mi nombre es " + nombreCompleto + " y tengo " + miEdad + " años de edad."
+ "Tengo un perro llamado " + miMascota + " que tiene " + edadMascota + " años de edad."; 
console.log(textoPresentacion);
let sumaEdades = miEdad + edadMascota;
let restaEdades = miEdad - edadMascota;
let productoEdades = miEdad % edadMascota;
let divisionEdades = miEdad / edadMascota;
console.log( "suma = " + sumaEdades, "resta = " + restaEdades,"producto = " + productoEdades,"division = " + divisionEdades);
let alumno = {
    nombre : miNombre,
    apellido : miApellido,
    edad : miEdad,
    nacionalidad : "Argentino",
    seEncuentraVivo : true
};
console.table(alumno);
console.log( "nombre: " + alumno.nombre);
console.log( "apellido: " + alumno.apellido);
console.log( "edad: " + alumno.edad);
console.log( "nacionalidad: " + alumno.nacionalidad);
console.log( "se encuentra vivo: " + alumno.seEncuentraVivo);

let mascota ={
    nombre : miMascota,
    edad : edadMascota,
    color : "blanco",
    comidaFavorita : "pan",
    leTeme : "escoba"
};
console.table(mascota);
console.log( "nombre: " + mascota.nombre);
console.log( "edad: " + mascota.edad);
console.log( "color: " + mascota.color);
console.log( "comida favorita: " + mascota.comidaFavorita);
console.log( "le tiene miedo a: " + mascota.leTeme);


const frutas = [ "banana" , "manzana" , "pera" , "uvas" , "durazno"]
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
// soymayordeedad //
let edad = Number( prompt ( "Coloca tu edad" ) ); 
let soyMayorDeEdad = edad >= 18 ;
console.log(`soy mayor de edad =  ${soyMayorDeEdad} `);
// if ( edad >= 18 ){
//     alert ( "soy mayor de edad");
// } else {
//     alert ( "muy chiquito")
// }

// --------------//
const numeros = [1,2,3,4,5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
//---familia---//
const familia = [ madre = {familiar : "mama" , nombre : "claudia"}, hermano = {familiar : "hermano" , nombre : "nico"},padre = {familiar : "padre" , nombre : "hugo"},abuela = {familiar : "abuela" , nombre : "estela"},tio = {familiar : "tio" , nombre : "luiz"}]
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

//---aleatorio---//
let textoAleatorio = `${familia[4].nombre} suele ser muy fanatico de las frutas, especialmente la ${frutas[1]}, la cual suele comer ${numeros[3]} al dia.`;
console.log(textoAleatorio);

//----comparacion de edad ----//
let edadDeCompañero = 25;
let soyMayorQueCompañero = miEdad >= edadDeCompañero;
let soyMenorQueCompañero = miEdad <= edadDeCompañero;
let soyIgualQueCompañero = miEdad == edadDeCompañero;
console.log("mi edad :" + miEdad);
console.log("la edad de mi compañero" + edadDeCompañero);
console.log("soy mayor que mi compañero = " + soyMayorQueCompañero);
console.log("soy menor que mi compañero = " + soyMenorQueCompañero);
console.log("tengo la misma edad que mi compañero = " + soyIgualQueCompañero);

//---atraccion --//
let edadPersona = 15;
let alturaPersona = 110;
console.log("edad de la persona = " + edadPersona);
console.log("altura de la persona = " + alturaPersona);
let edadMinima = 6;
let alturaMinima = 120;
let puedeSubir = (edadPersona >= edadMinima) && (alturaPersona >= alturaMinima);
console.log("Puede subir a la atraccion = " + puedeSubir);

//---pase ---//

let personaPase = "LIMITADO";
let personaSaldo = 1000;
puedePasar = (personaPase === "VIP" || personaSaldo === 1000) ;
console.log("La persona puede pasar = " + puedePasar);
