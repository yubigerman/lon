function enviarFormulario() { 
    
      var nombre = document.getElementById("nombre").value; // Obtiene el nombre del usuario  
       var 
    var numero = "1234567890"; // Cambia esto por el número de WhatsApp  
  
    var mensaje = document.getElementById("mensaje").value; // Obtiene el mensaje del usuario  
    var 
    // Crea un mensaje que combina el nombre y el mensaje  
    var mensajeCompleto = `Nombre: ${nombre}\nMensaje: ${mensaje}`;  
    var mensajeCodificado = encodeURIComponent(mensajeCompleto); // Codifica el mensaje para incluirlo en la URL  
    
    var urlWhatsApp = `https://wa.me/${numero}?text=${mensajeCodificado}`; // Crea la URL para WhatsApp  
    window.open(urlWhatsApp, "_blank"); // Abre la URL en una nueva pestaña  
}  