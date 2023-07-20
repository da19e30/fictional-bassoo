let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("aptitud");
        habilidades[5].classList.add("trabajo");
        habilidades[6].classList.add("creatividad");
        habilidades[7].classList.add("dedicacion");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}


  function enviarMensaje() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var tema = document.getElementById("tema").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || telefono === "" || correo === "" || tema === "" || mensaje === "") {
      alert("Por favor, completa todos los campos");
      return;
    }
  
    // Validar el formato del correo electrónico
    var correoExpresion = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!correo.match(correoExpresion)) {
      alert("Por favor, introduce una dirección de correo válida");
      return;
    }
  }

  