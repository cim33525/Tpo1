//validaciones para los campos de contacto

function validarMail(){
    let email = document.getElementById("email").value;
    let comprobacion = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    if (!email.match (comprobacion)){
        alert("Por favor ingrese un email valido");
    }
}

function validarNombre(){
    var nombre = document.getElementById("nombre").value;
    let cantLetras = nombre.length;
    
    if (cantLetras <= 3){
      alert("Nombre demasiado corto");
    }
}
