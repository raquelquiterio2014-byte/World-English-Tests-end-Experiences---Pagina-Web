function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

function enviarFormulario(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
}