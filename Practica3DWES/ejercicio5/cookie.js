function crearUnaCookie(nombreCookie,datosCookie){
   
  let cookies =  document.cookie = nombreCookie +"="+ datosCookie 
    console.log(cookies)
}

function checkCookie() {
    let username = getCookie("username"); //extrae el valor función anterior
    if (username != "") { //Si no está vacío
   alert(("Bienvenido de nuevo, " + username)); //Se le saluda
    } else {
   username = prompt("Introduzca su nombre: ", "");
   if (username != "" && username != null) {
    setCookie("username", username, 365); //Se inicializa la variable
   }
    }
   }
function consultarCookie(){
    let galleta = document.cookie;
    console.log(galleta)
}
function eliminarCookie(cookies){
    document.cookie = cookies + "=; max-age=0";
    console.log(document.cookie)
}