
// Funciones para corregir lo ingresado en los inputs
function CorregirUno (){
    let primero = document.getElementById('PrimeroUnoUno');
    let segundo = document.getElementById('PrimeroUnoDos');
    let tercero = document.getElementById('PrimeroUnoTres');
    let cuarto = document.getElementById('PrimeroUnoCuatro');
    let quinto = document.getElementById('PrimeroUnoCinco');
    let sexto = document.getElementById('PrimeroUnoSeis');
    let septimo = document.getElementById('PrimeroUnoSiete');
    let octavo = document.getElementById('PrimeroUnoOcho');
    if (primero.value == 10+8){
        primero.style.backgroundColor = "#31A231";
    }else{
        primero.style.backgroundColor = "#F62217";
    }
    if (segundo.value == 25+11){
        segundo.style.backgroundColor = "#31A231";
    }else{
        segundo.style.backgroundColor = "#F62217";
    }
    if (tercero.value == 54+13){
        tercero.style.backgroundColor = "#31A231";
    }else{
        tercero.style.backgroundColor = "#F62217";
    }
    if (cuarto.value == 25+24){
        cuarto.style.backgroundColor = "#31A231";
    }else{
        cuarto.style.backgroundColor = "#F62217";
    }
    if (quinto.value == 56-3){
        quinto.style.backgroundColor = "#31A231";
    }else{
        quinto.style.backgroundColor = "#F62217";
    }
    if (sexto.value == 17-5){
        sexto.style.backgroundColor = "#31A231";
    }else{
        sexto.style.backgroundColor = "#F62217";
    }
    if (septimo.value == 44-12){
        septimo.style.backgroundColor = "#31A231";
    }else{
        septimo.style.backgroundColor = "#F62217";
    }
    if (octavo.value == 70-57){
        octavo.style.backgroundColor = "#31A231";
    }else{
        octavo.style.backgroundColor = "#F62217";
    }
}
function CorregirDos (){
    let primero = document.getElementById('PrimeroDosUno');
    let segundo = document.getElementById('PrimeroDosDos');
    let tercero = document.getElementById('PrimeroDosTres');
    let cuarto = document.getElementById('PrimeroDosCuatro');
    let quinto = document.getElementById('PrimeroDosCinco');
    let sexto = document.getElementById('PrimeroDosSeis');
    let septimo = document.getElementById('PrimeroDosSiete');
    if (primero.value == 20+5-4){
        primero.style.backgroundColor = "#31A231";
    }else{
        primero.style.backgroundColor = "#F62217";
    }
    if (segundo.value == 48-3+10){
        segundo.style.backgroundColor = "#31A231";
    }else{
        segundo.style.backgroundColor = "#F62217";
    }
    if (tercero.value == 54-5+10){
        tercero.style.backgroundColor = "#31A231";
    }else{
        tercero.style.backgroundColor = "#F62217";
    }
    if (cuarto.value == 68+8-8){
        cuarto.style.backgroundColor = "#31A231";
    }else{
        cuarto.style.backgroundColor = "#F62217";
    }
    if (quinto.value == 77+6-10){
        quinto.style.backgroundColor = "#31A231";
    }else{
        quinto.style.backgroundColor = "#F62217";
    }
    if (sexto.value == 15-5+20){
        sexto.style.backgroundColor = "#31A231";
    }else{
        sexto.style.backgroundColor = "#F62217";
    }
    if (septimo.value == 50+40-30){
        septimo.style.backgroundColor = "#31A231";
    }else{
        septimo.style.backgroundColor = "#F62217";
    }
}
function CorregirTres(){
    let primero = document.getElementById('PrimeroTresUno');
    let segundo = document.getElementById('PrimeroTresDos');
    let tercero = document.getElementById('PrimeroTresTres'); 
    if (primero.value == "cuadrado" || primero.value == "CUADRADO" ){
        primero.style.backgroundColor = "#31A231";
    }else{
        primero.style.backgroundColor = "#F62217";
    }
    if (segundo.value == "circulo" || segundo.value == "CIRCULO"){
        segundo.style.backgroundColor = "#31A231";
    }else{
        segundo.style.backgroundColor = "#F62217";
    }
    if (tercero.value == "triangulo" || tercero.value == "TRIANGULO"){
        tercero.style.backgroundColor = "#31A231";
    }else{
        tercero.style.backgroundColor = "#F62217";
    }
}