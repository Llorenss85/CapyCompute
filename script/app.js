const url="https://script.google.com/macros/s/AKfycbw2ze7Dry4BLbOoawA0g_aF1UrSmWd9Un0zmoPBO0SlCw-y5xtzmVNHgv7dWnVNdZzF/exec"

document.addEventListener("DOMContentLoaded", ()=>{
    const login= document.getElementById("login") 
    const panel=document.getElementById("panel")
    let token
   
    login.addEventListener("submit",(event)=>{
        event.preventDefault(); // NO se recarga la página ,  JS toma control
        const password= document.getElementById("password").value;
        const usuario= document.getElementById("usuario").value;
        verificarUsuario(usuario,password,login,panel)
    })

    panel.addEventListener("submit",(event)=>{
        event.preventDefault()
        panelUso()

    })


})
async function panelUso(){
            const titulo = document.getElementById("titulo").textContent
            const descripcion = document.getElementById("descripcion").textContent
            const subtitulo=document.getElementById("subTitulo").textContent
            const desSubtitulo=document.getElementById("sub1Descripcion").textContent
            const nombre = document.getElementById("nombre").value
            const opciones = document.getElementById("opciones").value
            const path = crearPath(opciones,nombre)
    
            console.log(titulo,descripcion,subtitulo,desSubtitulo)
            console.log(path)

             const body = `<!DOCTYPE html><html lang="es"><head><script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="0cf137f8-884e-47c4-96fd-7c2d14f803c5" type="text/javascript" async></script><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="/CapyCompute/css/style.css"><script src="/CapyCompute/script/script.js"></script><title>CapyCompute</title></head><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-J8TV73RJ46');</script><body><header><nav class="nav"><div class="contenedor_nav"><p>CapyCompute</p><div class="contenedor_a"><a href="/CapyCompute/index.html">Inicio</a><a href="/CapyCompute/index.html#procesador">Productos</a></div></div></nav></header><main><section class="seccion noExiste"><h1>${titulo}</h1><article class="articulo_producto adaptar"><div class="articulo_img"><img src="/CapyCompute/img/procesadores/ryzen.png"></div><div class="articulo_producto"><p>${descripcion}</p><h3>${subtitulo}</h3><p>${desSubtitulo}</p></div><div class="referido" id="referido"><div class="referido_icon"><img src="/CapyCompute/img/redes/amazon_icon.png"><a href="https://amzn.to/3LrCpZP"> Amazon</a></div><div class="referido_icon"><img src="/CapyCompute/img/redes/aliexpress_icon.png"><a href="https://s.click.aliexpress.com/e/_c3EQrdJf"> AliExpress</a></div></div></article></section></main></body></html>`;

    try{

        const res= await fetch(url,{
        method :'POST',
        mode: "no-cors",
        body: JSON.stringify({
            action:"token",
            token:token,
            path:path,
            html:body,
        })
     })
    
     const resp= await res.json()
     console.log("se pudo", resp.token)
     console.log(token)
    }
    catch{
        alert("no estas registrado")
    }
}


function crearPath(path,nombre){

    return `${path}/${nombre}` 
}

function activarPreview(){
    input=document.getElementsByClassName("input")
    let aside=document.getElementById("preview_content")
    let body = `<div id="preview"><header><nav class="nav"><div class="contenedor_nav"><p>CapyCompute</p><div class="contenedor_a"><a href="/CapyCompute/index.html">Inicio</a><a href="/CapyCompute/index.html#procesador">Productos</a></div></div></nav></header><main><section class="seccion"><h1 id="titulo"></h1><article class="articulo_producto adaptar"><div class="articulo_img"><img src="/CapyCompute/img/procesadores/ryzen.png"></div><div class="articulo_producto"><p id="descripcion"></p><h3 id="subTitulo"></h3><p id="sub1Descripcion"></p></div><div class="referido" id="referido"><div class="referido_icon"><img src="/CapyCompute/img/redes/amazon_icon.png"><a href="https://amzn.to/3LrCpZP"> Amazon</a></div><div class="referido_icon"><img src="/CapyCompute/img/redes/aliexpress_icon.png"><a href="https://s.click.aliexpress.com/e/_c3EQrdJf"> AliExpress</a></div></div></article></section></main></div>`;
    aside.innerHTML=body
    Array.from(input).forEach(e => {
        e.addEventListener("input",(event)=>{
        agregarOEliminarPalabras(e,event)
        })
      });

}
function agregarOEliminarPalabras(e,event){
    if(event.data!==null){
        document.getElementById(e.dataset.pantalla).innerHTML+=event.data //coloca la letra en lo ultimo.
        if(document.getElementById(e.dataset.pantalla)===null){
            console.log(e.dataset.pantalla, e) //dictar el error por consola
        }
    }
    else if(event.data===null){
        document.getElementById(e.dataset.pantalla).innerHTML=e.value // toma lo escrito en el input actual, y lo coloca en el preview
    }
}
async function verificarUsuario(usuario,password,login,panel){
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            action: "usuario",
            usuario,
            password
        })
    });

    const data = await response.json()
    if(data.ok){
        token = data.token
        activarPreview()
        login.classList.add("apagado")
        panel.classList.remove("apagado")
    }
    else{
        alert("contraseña mal")
    }
    
}

