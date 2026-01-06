document.addEventListener("DOMContentLoaded", ()=>{
   const carrusel= document.getElementById("carrusel_img").children
   const carruselArray=Array.from(carrusel)
   const verMas = document.getElementById("verMas")
   const referido=document.getElementById("referido")
   //tengo los img, cambiar de estado en las clases apagado/animar
   
   cambiarImg(carruselArray)
   clickEnVerMas(verMas,referido)
})
function cambiarImg(arrayImg){
   setTimeout(()=>{
      if(arrayImg[0].classList.value.includes("animar"))
        {
         arrayImg[0].classList.remove("animar")
         arrayImg[0].classList.add("apagado")

         arrayImg[1].classList.remove("apagado")
         arrayImg[1].classList.add("animar")
        }
      else{
         arrayImg[1].classList.remove("animar")
         arrayImg[1].classList.add("apagado")

         arrayImg[0].classList.remove("apagado")
         arrayImg[0].classList.add("animar")
      } cambiarImg(arrayImg)
   }, 5500)
   
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