
//se refiere a todo el documento 
//accede al documento, opten los elementos por tag name o nombre etiqueta , los debemos guardar en una variable
var cajas= document.getElementsByTagName('div');

//ejemplo modificar texto
//forma1
//cajas[0].textContent= 'hola esto es una prueba';

//forma 2 : innerHTML nos permite obtener todo el contenido dentro 

//cajas[0].innerHTML='<h1>Hola</h1>';


//forma de acceder al elemento

//var cajas=document.getElementsByClassName('caja');

//FOrma 3 de obtener un elemento  

//************** USA LA CLASE PARA CSS Y EL ID EN EL ELEMENTO PARA EL JAVASCRIPT     *******************/


var primeraCaja= document.getElementById('primeraCaja');
primeraCaja.innerHTML='<h1>Hola</h1>';

var segundaCaja= document.getElementById('segundaCaja');
segundaCaja.textContent='Hola esto es la prueba dos';


// AGREGAR MAS ELEMENTOS O NODOS 

//PASO 1: CREAR EL ELEMENTO Y GUARDARLO EN EL DOM
 var caja= document.createElement('div');
 //creamos el nodo de texto que esta dentro de nuestra div
 var contenido= document.createTextNode('Hola mundo');

 //PASO 2: juntar los nodos, incrustrar dentro de la div, el contenido

 caja.appendChild(contenido);

 //paso 3: agregar atributos (clases, ids, etc)

 caja.setAttribute('class','caja naranja');

 //Paso 4:posicionar el elemento dentro del contenedor padre o main section

 var contenedor= document.getElementById('contenedor');

contenedor.appendChild(caja);



/// -----------------------MODIFICANDO LA CLASE O EL ID DE UN ELEMENTO -------------------------------//////////////

caja.id='primera';
caja.className='caja naranja';

//como puedo conocer el elemento padre de un elemento----> se puede ejecutar en consola, accedemos a cajas, luego el elemento caja que queremos y luego el parentNode. 

//guardamos el elemento padre en una variable

var padre= cajas[0].parentNode;


//------------------------ AGREGAR MAS ELEMENTOS O NODO------------------

// como posicionar un elemento antes de otro seleccionado en base al elemento padre
//llamamos el elemento padre, luego insertamos el elemento antes de y este recibe dos parametros, uno es el elemento que queremos agreagar y el segundo es  donde queremos insertarlo, en este caso se insertara encima de la caja con id primera caja

//Paso 4:posicionar el elemento dentro del contenedor padre o main section
//padre.insertBefore(caja, primeraCaja);

//padre.insertBefore(caja, cajas[3]);  //<---- las cajas son un arreglo que parte desde 0 


//REMPLAZAR LOS NODOS
padre.replaceChild(caja,cajas[2]);


//ELIMINAR NODOS

padre.removeChild(cajas[3]);