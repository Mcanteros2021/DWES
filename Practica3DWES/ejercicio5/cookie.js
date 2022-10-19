function crearUnaCookie(nombreCookie,datosCookie){
   
  let cookies =  document.cookie = nombreCookie +"="+ datosCookie 
    console.log(cookies)
}

function consultarCookie(){
    let galleta = document.cookie;
    console.log(galleta)
}
function eliminarCookie(cookies){
    document.cookie = cookies + "=; max-age=0";
    console.log(document.cookie)
}

