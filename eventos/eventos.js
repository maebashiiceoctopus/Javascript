/* existen tres modelo de eventos diferentes:

- modelo basico de eventos: caracteristicas limtadas, pero funciona en todos los navegadores, no se utiliza, utilizalo para hacer pruebas 
Ejemplo: ------------ esta funcion solo queremos que se ejecute cuando el usuario presione un boton 

function saludo(){
    alert('hola');
}
saludo();

- modelo de eventos estandar : podemos hacer mas cosas con el, lo soportan todos los navegadores
 las versiones anteriores a IE7 no lo soportan

 Ejemplo:
 accedemos a nuestro boton y lo guardamos en una variable, luego le agregamos el evento 


function saludoDos(){
    alert('este es el segundo saludo de prueba ahahaha');
}
var btnSaludar = document.getElementById('btn-saludar');
el primer parametro es el evento que le queremos dar, el segundo parametro es nuestra funcion, esto nos permite agregarle mas eventos
btnSaludar.addEventListener('click',saludo);
btnSaludar.addEventListener('mouseenter',saludoDos);

//podemos quitarle los eventos  a un elemento  y recibe 
btnSaludar.removeEventListener('mouseenter',saludoDos);



// podemos ejecutar funciones anonimas o fallbacks  no tienen nombre , permiten agregar el codigo que queremos que se ejecute cuando el usuario hace click en el elemento
btnSaludar.addEventListener('click',function(){

    // codigo 
});

*/

function crearCaja(){
    var contenedor= document.getElementById('contenedor');
    var caja= document.createElement('div');
    caja.className='caja';
    contenedor.appendChild(caja);
}
var btnCaja = document.getElementById('btncaja');
btnCaja.addEventListener('click',crearCaja);

/* algunos de los eventos mas usados:
click
focus
blur
change
onload
mouseover
resize
submit

*/