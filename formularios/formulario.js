var formulario=document.getElementById('formulario');
var nombre= formulario.nombre;
var sexo= formulario.sexo;
var terminos= formulario.terminos;

//validar  el nombre y cuando el formulario haya sido enviado
function validar(e){
    if(nombre.value > 18){
        alert('maximo de caracteres permitidos');
    } else if (nombre.value == ''){
        alert('por favor ingresa tu nombre');
    }

    //validamos los radio button de genero
    if(sexo[0].checked== false && sexo[1].checked == false){
        alert('por favor selecciona un genero');
    }

    //validamos a terminos y condiciones 

    if(!terminos.checked)  //si no se tiene un valor seleccionado por defecto en false, por lo cual lo volvemos a true, si los terminos son diferentes de true (!) enviamos el alert
    alert('Acepta los terminos y condiciones') 
    e.preventDefault();  // prevenir que si el formulario se envie s

}

formulario.addEventListener('submit',validar);