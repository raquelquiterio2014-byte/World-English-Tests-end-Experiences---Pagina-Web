function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });
}

function enviarFormulario(e) {
  e.preventDefault();
  alert("Esta é uma demonstração: a mensagem não foi enviada. Ainda não há serviço de contato conectado.");
}