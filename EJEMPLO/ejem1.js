const divprincipal = document.getElementById("principal")
console.log(divprincipal)

const textopie = document.getElementById("textpiepagina")
console.log(textopie)

const contenido = document.getElementsByClassName("contenido")
console.log(contenido)

const nombre = document.getElementsByName("txtnombre")
console.log(nombre)

const li = document.getElementsByTagName("li")
console.log(li)

//query selector
const div = document.querySelector("div")
console.log(div)

const elementoporid = document.querySelector("#textpiepagina")
console.log(elementoporid)

const elementoporclase = document.querySelector(".contenido")
console.log(elementoporclase)

//query selector all
const elementosporatributos = document.querySelectorAll('[type="text"]')
console.log(elementosporatributos)

// obtener contenido de un elemento


console.log(elementoporid.textContent)
elementoporid.textContent = "ANALISIS Y DESARROLO DE SOFTWARE-CAUCA-2025"
console.log(elementoporid.textContent)
//INNERHTML

console.log(elementoporid.innerHTML)
elementoporid.innerHTML = "<p><B>ADSO </B>-CAUCA-2025</p>"

//clear element
const elementul =document.querySelector("#ejemplo")
const linuevo = document.createElement("li")
linuevo.textContent="cinco"
elementul.appendChild(linuevo)


const btn1 =document.querySelector("#boton1")
console.log(btn1)
//function clicuno(){
  //  alert("click en uno")
//}

btn1.addEventListener("click",()=>{
    btn1.textContent="han dado click"
})

const boton2 =document.querySelector("#btn2")
 boton2.addEventListener("mouseover",=>{
    
 })   