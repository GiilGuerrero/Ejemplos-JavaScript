//document.write('¡Hola JS!')
//var cajas = document.getElementsByTagName('div')
//var cajas = document.getElementsByClassName('caja')
var caja = document.getElementById('primera')


//cajas[0].textContent ='Hola mundo'
//cajas[1].innerHTML ='<b> Hola JavaScript </b>'
caja.textContent = 'primera caja'

//No se recomienda agregar elementos con el metodo write()
//document.write('<div class="caja">Nuevo Elemento')
//Pasos para agregar elementos(nodos) nuevos.
//Paso 1
var elementoNuevo = document.createElement('div')
//Paso 2
var nodoContenido = document.createTextNode('Nuevo elemento')
//Paso 3
elementoNuevo.appendChild(nodoContenido)
//Paso 4
elementoNuevo.setAttribute('class','caja color')

//Paso 5

//Agrega el nuevo elemento al final
//var contenedor=document.getElementById('contenedor')
//contenedor.appendChild(elementoNuevo)


//Agrega el nuevo elemento al inicio
var contenedor = document.getElementById('contenedor')
var primera = document.getElementById('primera')
contenedor.insertBefore(elementoNuevo , primera)

//Eliminar la caja con el id = 'tercera'
var tercera = document.getElementById('tercera')
contenedor.removeChild(tercera)
