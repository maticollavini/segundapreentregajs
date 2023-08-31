class Alumno {
    constructor(nombre, apellido, curso, trimestre1, trimestre2, trimestre3){
    this.nombre = nombre
    this.apellido = apellido
    this.curso = curso
    this.trimestre1 = trimestre1
    this.trimestre2 = trimestre2
    this.trimestre3 = trimestre3
    }
}

const alumnos = [];

const filtroAprobar = alumno => {
    const promedio = (parseFloat(alumno.trimestre1) + parseFloat(alumno.trimestre2) + parseFloat(alumno.trimestre3)) / 3;
    return promedio >= 7;
};

const filtroDesaprobar = alumno => {
    const promedio = (parseFloat(alumno.trimestre1) + parseFloat(alumno.trimestre2) + parseFloat(alumno.trimestre3)) / 3;
    return promedio < 7;
};


function sacarPromedio(){

    const cantidadAlumnos = parseInt(prompt("Cuantos alumnos va a ingresar"))

    for(let i = 0; i < cantidadAlumnos; i++){

    const nombre = prompt("Ingrese el nombre del alumno")

    const apellido = prompt("Ingrese el apellido del alumno")

    const curso = prompt("Ingrese el curso")

    const trimestre1 = parseFloat(prompt("Ingrese la nota del primer trimestre"))

    const trimestre2 = parseFloat(prompt("Ingrese la nota del segundo trimestre"))

    const trimestre3 = parseFloat(prompt("Ingrese la nota del tercer trimestre"))

    const alumnosIngresados = new Alumno(nombre, apellido, curso, trimestre1, trimestre2, trimestre3)

    alumnos.push(alumnosIngresados)
    }

    const alumnosAprobados = alumnos.filter(filtroAprobar)
    const alumnosDesaprobados = alumnos.filter(filtroDesaprobar)

    console.log("todos los alumnos" + ' ' + alumnos.length)

    console.log(alumnos)

    console.log("alumnos aprobados" + " " + alumnosAprobados.length)

    
    for (const alumnoAprobado of alumnosAprobados) {
        console.log(alumnoAprobado.nombre, alumnoAprobado.apellido);
    }
    
    console.log("alumnos desaprobados" + " " + alumnosDesaprobados.length)
    
    for (const alumnoDesaprobado of alumnosDesaprobados) {
    console.log(alumnoDesaprobado.nombre, alumnoDesaprobado.apellido);
    }
}

sacarPromedio()