let cadena = "HOLA XDs";
let cadena2 = "";

//metodo cadena

resultado = cadena.concat("hola"); //añade otras cadenas

resultado1 = cadena.startsWith("cadena"); //true, nos dice si empieza con esa cadena que le dijimos

resultado2 = cadena.endsWith("cadena"); //false, nos dice si empieza con esa cadena que le dijimos

resultado3 = cadena.includes("bobo"); // false, no contiene esa palabra o letra  

resultado4 = cadena.indexOf("tarado") // la palabra tarado comienza en tal numero, digamos en el 12, desde ahi comieza

resultado5 = cadena.lastIndexOf("tarado") //busca la ultima palabra que empieze por t o tarado, en el caso seria la ultima la ultima que este

resultado6 = cadena.padStart(6,"a"); //rellena la cadena con caracteres, en el inicio, re repite la combinacion que pongamos

resultado7 = cadena.padEnd(10,10); // lo mismo que el de arriba pero al final

resultado7 = cadena.repeat(2); //ejemplo cadena = 123; lo que muestra es == 123 123, las vecs que queramos poner ahi

resultado8 = cadena.split(" "); //me devuelve un array, me lo separa con lo que ponga dentro, como que separa y borrar y remplaza por coma

resultado9 = cadena.substring(1,5); //me muestra las letras que quiero ver, empiza desde el 0 hasta n numero que quiera poner

resultado10 = cadena.toLowerCase();//convierte una cadena a minuscula

resultado11 = cadena.toUpperCase();//convierte una cadena a mayuscula

resultado12 = cadena.toString();//para convertir numeros a cadena 

resultado13 = cadena.length; //cuantos caracteres tiene nuestro elemento

resultado14 = cadena.trim(); //borramos espacios que tengamos .trimEnd() = elimina los espacios al final, .trimStart() = nos elimina los espacios del principio



//metodos array


let numeros = ["pepa","1","putaku","amor"];

//transformadores

//let resultado15 = nombres.pop(); //saca el ultimo elemento del array, iwi,uwu,owo = sacaria el owo por ejemplo

//let resultado16 = nombres.shift(); //elimina el primero asi como el de arriba, pero este seria el primero 

//let resultado17 = nombres.push(); //agrega un elemento al final de la lista

//let resultado18 = nombres.reverse();//nos muestra los numeros de derecha a izq

//numeros.unshift(0,1,2); //opuesto al shift

//numeros.sort(); //los ordena de manera lexicografico, en plan en orden a b c d si son cadenas, o 1 2 3 4 5 etc si son numeros

//let resultado20 = numeros.splice(1,2); //añador cosas en donde digamos
//accesores

//let resultado21 = numeros.join("-");//añade algo en medio de los elementos, es algo de unir elementos de la matriz

//let resultado22 = numeros.slice(0,3); //es mostrar los elementos desde uno a n numeros, menos el ultimo no se muestra


// numeros.filter(numero => document.write(numero + "<br>"));

// document.write("<br>---------------------<br>");

// numeros.filter((numero)=>{
//     document.write(numero+"<br>");
// });

// document.write("<br>---------------------<br>");

// numeros.filter(function(numero){
//     document.write(numero+"<br>");
// });


// document.write("<br>---------------------<br>");
// //foreach
// numeros.forEach(function(numero){
//     document.write(numero+"<br>");
// });


// document.write("<br>---------------------<br>");

// document.write("<br>---------------------<br>");

// //ejemplo filter

// resultado33 = numeros.filter(numero => numero.length > 5); //como que nos crea un nuevo array con lo que hagamos o elijamos

// document.write(resultado33);


numero = Math.sqrt(25);

numero1 = Math.cbrt(25);

numero2 = Math.max(1,33,42,15,45,344,34234,3333345,22);

numero3 = Math.min(1,33,42,15,45,344,34234,3333345,22,0);

numero4 = Math.random()*100;

numero5 = Math.round(numero4);

numero6 = Math.floor(numero4);

numero7 = Math.fround(9.99999999999999999999);


numero8 = Math.trunc(9.2); //elimina decimales

document.write(Math.PI);

//nosequeva5222 //cotnraseña que cree para un perfil mio de face que aun existe no se si es el de nikols