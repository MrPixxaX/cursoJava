// let array = ["lucaton","uwux2","putakon","holi"];


// alert(array[5]);


//aaray asociativo

// pc = {
//     nombre: "DaltoPc",
//     procesador: "Intel core 7",
//     ram: "16GB",
//     espacio: "1TB"
// };

// let frase = `El nombre de mi pc es: ${pc["nombre"]} <br>
//              El procesador de mi pc es: ${pc["procesador"]} <br>
//              La ram es: ${pc["ram"]} <br>
//              Espacio es ${pc["espacio"]}` 

// document.write(frase)


//FUNCIONES

function saludar(nombre){
    let frase = `!Hola ${nombre}! como estas?`
    document.write(frase);
}

//segunda forma de crearlo
const saludar = function(nombre){
    let frase = `!Hola ${nombre}! como estas?`
    document.write(frase);
}

//tercera forma de crear una funcion flecha


const saludar = (nombre) =>{
    let frase = `!Hola ${nombre}! como estas?`
    document.write(frase);
}



function suma(n1,n2){
    return (n1+n2);
}

