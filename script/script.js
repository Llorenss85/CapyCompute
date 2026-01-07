document.addEventListener("DOMContentLoaded", ()=>{
   const carrusel= document.getElementById("carrusel_img").children
   const carruselArray=Array.from(carrusel)
   const verMas = document.getElementById("verMas")
   const referido=document.getElementById("referido")
   //tengo los img, cambiar de estado en las clases apagado/animar
   
   cambiarImg(carruselArray)
   clickEnVerMas(verMas,referido)
})
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // una promesa desde cero que indica correcto cuando pasa el tiempo argumentado. 
}
async function cambiarImg(arrayImg){
   while(true){
   await delay(5500)
   modificarImagen(arrayImg)
   }
}
function modificarImagen(arrayimgs){
      if(arrayimgs[0].classList.value.includes("animar"))
        {
         arrayimgs[0].classList.remove("animar")
         arrayimgs[0].classList.add("apagado")

         arrayimgs[1].classList.remove("apagado")
         arrayimgs[1].classList.add("animar")
        }
      else{
         arrayimgs[1].classList.remove("animar")
         arrayimgs[1].classList.add("apagado")

         arrayimgs[0].classList.remove("apagado")
         arrayimgs[0].classList.add("animar")
      } 
}
function clickEnVerMas(unBoton,unContenedor){
   unBoton.addEventListener("click", ()=> {
      //el contenedor dado, tomando sus hijos lo transformo en un array para poder manipularlo con forEach
      // a cada elemento le agrego el salto.
      Array.from(unContenedor.children).forEach(element => {
         element.classList.add("jump")
         console.log(element.classList)
         setTimeout(()=>{
            element.classList.remove("jump")
         },1000)
      }); 
   })
}