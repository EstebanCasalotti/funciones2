let alumno = prompt("ingrese el nombre del alumno")
let nota1PrimerTrimestre = Number(prompt("ingrese la primera nota del primer trimestre")), nota2PrimerTrimestre = Number(prompt("ingrese la segunda nota del primer trimestre")), nota3PrimerTrimestre = Number(prompt("ingrese la tercera nota del primer trimestre"))
let nota1SegundoTrimestre = Number(prompt("ingrese la primera nota del segundo trimestre")), nota2SegundoTrimestre = Number(prompt("ingrese la segunda nota del segundo trimestre")), nota3SegundoTrimestre = Number(prompt("ingrese la tercera nota del segundo trimestre"))
let nota1TercerTrimestre = Number(prompt("ingrese la primera nota del tercer trimestre")), nota2TercerTrimestre = Number(prompt("ingrese la segunda nota del tercer trimestre")), nota3TercerTrimestre = Number(prompt("ingrese la tercera nota del tercer trimestre"))

// funcion
function calculo (){
    // primer trimestre
    let promedio1 = (nota1PrimerTrimestre + nota2PrimerTrimestre + nota3PrimerTrimestre) / 3
    console.log("Alumno/a",alumno,"El promedio del primer trimestre es",promedio1);

    // segundo trimestre
    let promedio2 = (nota1SegundoTrimestre + nota2SegundoTrimestre + nota3SegundoTrimestre) / 3
    console.log("Alumno/a",alumno,"El promedio del segundo trimestre es",promedio2);

    // tercer trimestre
    let promedio3 = (nota1TercerTrimestre + nota2TercerTrimestre + nota3TercerTrimestre) / 3
    console.log("Alumno/a",alumno,"El promedio del tercer trimestre es",promedio3);

    // promedio final
    let promedioFinal = (promedio1 + promedio2 + promedio3) / 3
    console.log("Alumno/a",alumno,"Su promedio final es",promedioFinal);
}
calculo()
