# World-English-Tests-end-Experiences---Pagina-Web
Pagina Web - professora online de inglês

✔ Estrutura em HTML
✔ Estilo em CSS inspirado no logo
✔ Um toque de JavaScript
✔ Seções: Sobre, Serviços e Contato
✔ Botão interativo

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>World English Tests and Experiences</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
    }

    body {
      background: #e6f7ff;
      color: #003344;
    }

    header {
      background: linear-gradient(135deg, #0099cc, #00cc66);
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    header img {
      width: 120px;
      margin-bottom: 10px;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 20px;
      background: #0077aa;
      padding: 15px;
      position: sticky;
      top: 0;
    }

    nav a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: 0.3s;
    }

    nav a:hover {
      color: #00ffcc;
    }

    section {
      padding: 60px 20px;
      text-align: center;
    }

    .container {
      max-width: 1000px;
      margin: auto;
    }

    .btn {
      background: #00cc66;
      color: white;
      padding: 12px 25px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
      font-size: 16px;
    }

    .btn:hover {
      background: #00994d;
      transform: scale(1.05);
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .card {
      background: white;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: 0.3s;
    }

    .card:hover {
      transform: translateY(-10px);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 500px;
      margin: auto;
    }

    input, textarea {
      padding: 10px;
      border-radius: 8px;
      border: 1px solid #ccc;
    }

    footer {
      background: #003344;
      color: white;
      text-align: center;
      padding: 20px;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 20px;
      }
    }
  </style>
</head>
<body>

<header>
  <img src="/mnt/data/4557763-terrestrial-globo-cartoon-vector-object-vetor.jpg" alt="Logo">
  <h1>World English Tests and Experiences</h1>
  <p>Aprenda inglês com experiências reais 🌍</p>
  <button class="btn" onclick="scrollToSection('contato')">Começar Agora</button>
</header>

<nav>
  <a href="#sobre">Sobre</a>
  <a href="#servicos">Serviços</a>
  <a href="#contato">Contato</a>
</nav>

<section id="sobre">
  <div class="container">
    <h2>Sobre</h2>
    <p>Professora de inglês online focada em conversação, experiências internacionais.</p>
  </div>
</section>

<section id="servicos">
  <div class="container">
    <h2>Serviços</h2>
    <div class="cards">
      <div class="card">
        <h3>Conversação</h3>
        <p>Prática real para fluência rápida.</p>
      </div>
      <div class="card">
        <h3>Aulas Personalizadas</h3>
        <p>Plano focado no seu objetivo.</p>
      </div>
    </div>
  </div>
</section>


<section id="contato">
  <div class="container">
    <h2>Contato</h2>
    <form onsubmit="enviarFormulario(event)">
      <input type="text" placeholder="Seu nome" required>
      <input type="email" placeholder="Seu email" required>
      <textarea placeholder="Sua mensagem" required></textarea>
      <button class="btn">Enviar</button>
    </form>
  </div>
</section>

<footer>
  <p>© 2026 World English Tests and Experiences</p>
</footer>

<script>
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  function enviarFormulario(e) {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  }
</script>

</body>
</html>
