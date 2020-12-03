var cajas=document.getElementsByClassName('caja');

//cambiar el color de una caja al hacer click
//la palabra reservada THIS nos sirve para detectar cual caja ha sido clickeada 
//cuando no sepamos que elemento fue clickeado podemos usar this.
function color(){
this.classList.toggle('negro');

}

for( var i= 0 ; i < cajas.length; i++){
cajas[i].addEventListener('click',color);

}
