var checkbox = document.getElementById("checar");

checkbox.addEventListener("change", function () {
  var label = document.querySelector("div.password");
  if (this.checked) {
    label.style.color = "red";
  } else {
    label.style.color = "rgba(111, 123, 123, 0.219)";
  }
});

// limpar input ao clicar

function limparTexto() {
  var input = document.getElementById("emailInput");
  if (input.value === "Seu Melhor Email") {
    input.value = "";
  }
}

// PARTE 2 TRANSFORMAR
// TROCAR BACKGROUD 1 AO CLICAR
document.getElementById("on").addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  document.getElementById("wallpapers").style.backgroundImage =
    "url('../images/Makima 1.jpg')";
  document.getElementById("theme").style.color = "rgba(185, 13, 13, 1)";
  document.getElementById("wallpapers").classList.add("animacaoAtivada");
});

function segundaPaginaAtivada() {
  // Adiciona uma classe ao elemento #wallpapers quando a segunda página é ativada
  document.getElementById("wallpapers").classList.add("animacaoAtivada");
}

function segundaPaginaDesativada() {
  // Remove a classe do elemento #wallpapers quando a segunda página é desativada
  document.getElementById("wallpapers").classList.remove("animacaoAtivada");
}

// VOLTAR AO NORMAL

document.getElementById("off").addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  document.getElementById("wallpapers").style.backgroundImage =
    "url('../images/wallprinci.jpg')";
  document.getElementById("theme").style.color = "rgba(15, 13, 13, 1)";
  // Remove a classe 'animacaoAtivada' do elemento com o ID 'wallpapers'
  document.getElementById("wallpapers").classList.remove("animacaoAtivada");
});
