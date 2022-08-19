function ejercicio1(){

    let cantidad = prompt("¿cuantos alumnos son?");
    let alumnosTotales = [];

    for (i = 0; i < cantidad; i++) {
        alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
    }

    const tomarAsistencia = (nombre,p)=>{
        let presencia = prompt(nombre);
        if (presencia == "p" || presencia == "P") {
            alumnosTotales[p][1]++;
        }
    }


    for (i = 0; i < 30; i++) {
        for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
        }
    }


    for (alumno in alumnosTotales) {
        let resultado = `${alumnosTotales[alumno][0]}:<br>
        ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
        ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
        if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
        } else {
        resultado+= "<br><br>"
        }
        document.write(resultado)
    }
}


const suma = (n1,n2) =>{
    return (parseInt(n1)+parseInt(n2));
}
const resta = (n1,n2) =>{
    return (parseInt(n1)-parseInt(n2));
}
const multiplicacion = (n1,n2) =>{
    return (parseInt(n1)*parseInt(n2));
}

const division = (n1,n2) =>{
    return (parseInt(n1)/parseInt(n2));
}

alert("Que operacion deseas hacer? ");
let operacion = prompt("1: Suma, 2: Resta, 3: Multiplicacion, 4: Division");

if (operacion == 1){
    let n1 = prompt("primer numero: ");
    let n2 = prompt("primer numero: ");
    let r = suma(n1,n2);
    alert(`Tu resultado es: ${r}`);
}else if(operacion == 2){
    let n1 = prompt("primer numero: ");
    let n2 = prompt("primer numero: ");
    let r = resta(n1,n2);
    alert(`Tu resultado es: ${r}`);
}else if(operacion == 3){
    let n1 = prompt("primer numero: ");
    let n2 = prompt("primer numero: ");
    let r = multiplicacion(n1,n2);
    alert(`Tu resultado es: ${r}`);
}else if(operacion == 4){
    let n1 = prompt("primer numero: ");
    let n2 = prompt("primer numero: ");
    let r = division(n1,n2);
    alert(`Tu resultado es: ${r}`);
}else{
    alert("La opcion ingresada no existe");
}
