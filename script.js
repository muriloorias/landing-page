// 1) MODO CLARO / ESCURO
const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", function () {
  const html = document.documentElement;
  const atual = html.getAttribute("data-bs-theme");
  const novo = atual === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", novo);
  btnTema.textContent = novo === "light" ? "Modo escuro" : "Modo claro";
});

// 2) CONTAGEM REGRESSIVA (BLACK FRIDAY)
function atualizarContagem() {
  const alvo = new Date("2026-11-27T00:00:00");   // data da Black Friday
  const diff = alvo - new Date();
  const campo = document.getElementById("contagem");
  if (diff <= 0) {
    campo.textContent = "A Black Friday começou! Aproveite!";
    return;
  }
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const min = Math.floor((diff / (1000 * 60)) % 60);
  const seg = Math.floor((diff / 1000) % 60);
  campo.textContent = dias + "d " + horas + "h " + min + "min " + seg + "s";
}
setInterval(atualizarContagem, 1000);
atualizarContagem();

// 3) LOG DOS DADOS DO CONTATO
function logarContato(nome, email, mensagem) {
  const dados = {
    nome: nome,
    email: email,
    mensagem: mensagem,
    enviadoEm: new Date().toLocaleString("pt-BR")
  };
  console.log("Novo contato recebido:");
  console.table(dados);
}

// 4) ENVIO DO FORMULARIO
const form = document.getElementById("formContato");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("msg").value;
  logarContato(nome, email, mensagem);
  document.getElementById("areaAlerta").innerHTML =
    '<div class="alert alert-success mt-3">Obrigado, ' + nome +
    '! Recebemos sua mensagem.</div>';
  form.reset();
  form.classList.remove("was-validated");
});
