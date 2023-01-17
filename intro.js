var nombres =['jose','maria','pedro']

nombres.push('Rosa')
4
nombres.pop()
'Rosa'
nombres.unshift('Emilia')
4
nombres.shift

nombres.shift()
'Emilia'
nombres.indexOf("Pedro")
-1
nombres.indexOf("pedro")
2
function funciondeclarativa(nombres){
    console.log(`Buenas tardes, ${nombres}`)
}
const funcionExpresion = function(nombres){
    console.log(`Hola, funcion expresion, ${nombres}`)}
const funcionFlecha = nombres => { console.log(`Hola, funcion de flecha, ${nombres}`)}

for(var i=0; i<nombres.length; i++){
    funciondeclarativa(nombres[i])
    funcionExpresion(nombres[i])
    funcionFlecha(nombres[i])
}

///////////////////
var data =[
    {nombres: 'jose',edad:'25'},
    {nombres: 'alfredo',edad:'30'},
    {nombres: 'juan',edad:'20'},
    ]

data.forEach(function(dato){
    console.log(dato.nombre)
})
3VM2772:8 undefined
undefined
data.filter(function(dato){
    console.log(dato.edad>25)
})
VM2964:2 false
VM2964:2 true
VM2964:2 false
[]
var resultado =data.filter(function(dato){return dato.edad > 25) 
})
VM3115:1 Uncaught SyntaxError: Unexpected token ')'
var resultado =data.filter(function(dato){return dato.edad > 25
})
undefined
var resultado = data.map(function(dato){
    return dato.nombre
})
undefined
resultado
(3) [undefined, undefined, undefined]

/////////////////////
var alumno = {    
    nombre: 'Pedro',
    apellido: 'Guardado',

    mostrarDatos: Function(){
        console.log(`${this.nombre},${this.apellido}`)}
