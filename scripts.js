document.getElementById('solicitud-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value; // Obtener el número de teléfono

  // Construir el mensaje para WhatsApp
  const mensaje = `Solicitud de Ingreso:\nNombre: ${nombre}\nEmail: ${email}`;

  // Crear enlace de WhatsApp con el número de teléfono
  const whatsappLink = `https://api.whatsapp.com/send?phone=${8493902229}&text=${encodeURIComponent(mensaje)}`;

  // Abrir WhatsApp con el mensaje
  window.open(whatsappLink, '_blank');
});
