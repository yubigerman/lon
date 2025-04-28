function showInfo(id) {
  // Ocultar todas las informaciones
  const infos = document.querySelectorAll('.info');
  infos.forEach(info => info.style.display = 'none');

  // Mostrar la información seleccionada
  const infoToShow = document.getElementById(id);
  if (infoToShow) {
      infoToShow.style.display = 'block';
  }
}

function hideAll() {
  const infos = document.querySelectorAll('.info');
  infos.forEach(info => info.style.display = 'none');
}