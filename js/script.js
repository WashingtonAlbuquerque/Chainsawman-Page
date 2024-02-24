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

// Mapeamento das imagens para cada estado
var imageMap = {
  denji: {
    on: "./images/makimaa.png",
    off: "./images/imagem_denji_off.png",
  },
  power: {
    on: "./images/yorurender.png",
    off: "./images/imagem_power_off.png",
  },
  aki: {
    on: "./images/reze.png",
    off: "./images/imagem_aki_off.png",
  },
  kishibe: {
    on: "./images/Gun_devil 1.png",
    off: "./images/imagem_kishibe_off.png",
  },
  wall: {
    on: "./images/makix.jpg",
    off: "./images/imagem_kishibe_off.png",
  },
};

// Mapeamento dos textos para cada elemento h1
var textMap = {
  denji: "Makima",
  power: "Aza",
  aki: "Ze",
};

// Salvar o estado original das imagens
var originalImageMap = {};
Object.keys(imageMap).forEach(function (id) {
  var element = document.getElementById(id);
  if (element) {
    originalImageMap[id] = element.getAttribute("src");
  }
});

// Salvar o estado original dos textos
var originalTextMap = {};
Object.keys(textMap).forEach(function (id) {
  var element = document.getElementById(id + "h"); // Adiciona 'h' para selecionar o h1 correspondente
  if (element) {
    originalTextMap[id] = element.textContent;
  }
});

// Função para alterar as imagens e textos quando clicar em "on"
function changeImagesAndTexts(state) {
  // Alterar as imagens
  Object.keys(imageMap).forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      var imagePath = imageMap[id][state];
      element.setAttribute("src", imagePath);
    }
  });

  // Alterar os textos
  Object.keys(textMap).forEach(function (id) {
    var element = document.getElementById(id + "h");
    if (element) {
      var newText = textMap[id];
      element.textContent = newText;
    }
  });
}

// Event listener para o botão "on"
document.getElementById("on").addEventListener("click", function () {
  changeImagesAndTexts("on");

  // Adicionar a classe 'active' ao elemento #wallpapers
  var wallpapersElement = document.getElementById("wallpapers");
  if (wallpapersElement) {
    wallpapersElement.classList.add("active");
    wallpapersElement.style.background =
      "url('/images/Makima 1.jpg') 50% / cover no-repeat";
  }

  // Alterar o texto do elemento <p> com id "historia"
  var historiaElement = document.getElementById("historia");
  if (historiaElement) {
    historiaElement.textContent =
      "Todos os demônios nascem com um nome. À medida que esse nome se torna temido, o próprio demônio aumenta seu poder.";
  }
  // Adicionar classe ao container
  var containerElement = document.getElementById("container");
  if (containerElement) {
    containerElement.classList.add("active");
    containerElement.style.background =
      "linear-gradient(rgba(39, 10, 10, 0), rgba(61, 10, 14, 1))";
  }
  // Alterar cor de fundo para li-container
  var liContainers = document.getElementsByClassName("li-container");
  for (var i = 0; i < liContainers.length; i++) {
    liContainers[i].style.background =
      "linear-gradient(rgba(61, 10, 14, 1), rgba(39, 10, 10, 0))";
  }
});

// Event listener para o botão "off"
document.getElementById("off").addEventListener("click", function () {
  // Restaurar imagens originais
  Object.keys(originalImageMap).forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.setAttribute("src", originalImageMap[id]);
    }
  });

  // Restaurar textos originais
  Object.keys(originalTextMap).forEach(function (id) {
    var element = document.getElementById(id + "h");
    if (element) {
      element.textContent = originalTextMap[id];
    }
  });

  // Restaurar o estilo de fundo do elemento #wallpapers
  var wallpapersElement = document.getElementById("wallpapers");
  if (wallpapersElement) {
    wallpapersElement.classList.remove("active");
    wallpapersElement.style.background = ""; // Remover o estilo de fundo
  }

  // Remover classe do container
  var containerElement = document.getElementById("container");
  if (containerElement) {
    containerElement.classList.remove("active");
    containerElement.style.background = ""; // Remover o estilo de fundo
  }
  // Restaurar cor de fundo para li-container
  var liContainers = document.getElementsByClassName("li-container");
  for (var i = 0; i < liContainers.length; i++) {
    liContainers[i].style.background = "";
  }

  // Restaurar o texto original do elemento #historia
  var historiaElement = document.getElementById("historia");
  if (historiaElement) {
    historiaElement.textContent =
      "Em uma realidade onde demônios podem fazer contratos com humanos, concedendo poderes a eles após um pacto, a trama da animação japonesa acompanha o jovem Denji, um adolescente que enfrenta complicações financeiras por conta de dívidas deixadas por seu pai em relação à organização criminosa Yakuza.";
  }

  // Adiciona a classe 'fade-out' para animar a opacidade
  this.classList.add("fade-out");
  // Adiciona a classe 'rotate' para animar a rotação
  this.classList.add("rotate");

  // Após 300ms, remove a classe 'fade-out' para redefinir a opacidade
  setTimeout(() => {
    this.classList.remove("fade-out");
  }, 300);

  // Após 300ms, remove a classe 'rotate' para redefinir a rotação
  setTimeout(() => {
    this.classList.remove("rotate");
  }, 300);
});
