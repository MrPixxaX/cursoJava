function ejercicio1(){
    class Calculadora{

        sumar (n1,n2){
            return (parseInt(n1)+parseInt(n2));
        }
        restar(n1,n2){
            return (parseInt(n1)-parseInt(n2));
        }
        multiplicacion(n1,n2){
            return (parseInt(n1)*parseInt(n2));
        }

        division(n1,n2){
            return (parseInt(n1)/parseInt(n2));
        }

        potenciar(num,exp){
            return num**exp;
        }

        raizCuadrada(num){
            return Math.sqrt(num);
        }
    
        raizCubica(num){
            return Math.cbrt(num);
        }
    }

    const calculadora = new Calculadora();

    alert("Que operacion deseas hacer? ");
    let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division, 5: potenciacion, 6: raiz cuadrada, 7: raiz cubica");

    if (operacion == 1){
        let n1 = prompt("primer numero: ");
        let n2 = prompt("segundo numero: ");
        let r =calculadora.sumar(n1,n2);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 2){
        let n1 = prompt("primer numero: ");
        let n2 = prompt("segundo numero: ");
        let r = calculadora.restar(n1,n2);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 3){
        let n1 = prompt("primer numero: ");
        let n2 = prompt("segundo numero: ");
        let r = calculadora.multiplicacion(n1,n2);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 4){
        let n1 = prompt("primer numero: ");
        let n2 = prompt("segundo numero: ");
        let r = calculadora.division(n1,n2);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 5){
        let n1 = prompt("primer numero: ");
        let n2 = prompt("segundo numero: ");
        let r = calculadora.potenciar(n1,n2);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 6){
        let n1 = prompt("primer numero: ");
        let r = calculadora.raizCuadrada(n1);
        alert(`Tu resultado es: ${r}`);
    }else if(operacion == 7){
        let n1 = prompt("primer numero: ");
        let r = calculadora.raizCubica(n1);
        alert(`Tu resultado es: ${r}`);
    }else{
        alert("La opcion ingresada no existe");
    } 
} 




function ejercicio2(){


    const materias = {
        fisica: ["Perez","pedro","pepito","cofla","maria"],
        programacion: ["Dalto","pedro","juan","pepito"],
        logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
        quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
    }

    const obtenerInformacion = (materia)=>{

    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
    }


    const mostrarInformacion = (materia) => {
        let informacion = obtenerInformacion(materia);
        if(informacion !== false){
            let profesor = informacion[0][0];
            let alumnos = informacion[0];
            alumnos.shift();

            document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
                Los alumnos son: <b style="color:blue">${alumnos}</b><br><br>
                `);
        }
    }

    const cantidadDeClases = (alumno)=>{
        let informacion = obtenerInformacion();
        let clasesPresentes = [];
        let cantidadTotal = 0;
        for (info in informacion) {
            if (informacion[info].includes(alumno)) {
                cantidadTotal++;
                clasesPresentes.push(" "+ info);
            }
        }
        return `<b style='color:blue'>
        ${alumno}</b> está en <b>${cantidadTotal} clases: <b style='color:green'>${clasesPresentes}</b>
        <br><br>
        `;
    }




    mostrarInformacion("fisica");
    mostrarInformacion("programacion");
    mostrarInformacion("logica");
    mostrarInformacion("quimica");

    document.write(cantidadDeClases("cofla"));
    document.write(cantidadDeClases("pedro"));

}



// 

// 

//ejercicio 3

// 

// 

let materias = {
    fisica: ["Perez","pedro","pepito","cofla","maria"],
    programacion: ["Dalto","pedro","juan","pepito"],
    logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
    quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
}


const inscribir = (alumno,materia)=>{
personas = materias[materia];
if (personas.length >= 21) {
    document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
} else {
    personas.push(alumno);
    if (materia == "fisica") {
        materias = {
            fisica: personas,
            programacion: materias['programacion'],
            logica: materias['logica'],
            quimica:materias['quimica']
        }
    }
    else if (materia == "programacion") {
        materias = {
            fisica: materias['fisica'],
            programacion: personas,
            logica: materias['logica'],
            quimica:materias['quimica']
        }
    }else if (materia == "logica") {
        materias = {
            fisica: materias['fisica'],
            programacion: materia['programacion'],
            logica: personas,
            quimica:materias['quimica']
        }
    }else if (materia == "quimica") {
        materias = {
            fisica: materias['fisica'],
            programacion: materia['programacion'],
            logica: materias['logica'],
            quimica: personas
        }
    }
    document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
}
}

document.write(materias['fisica'] + "<br>")

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");

document.write("<br>" + materias['fisica'])