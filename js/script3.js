var imageMap = {
  denji: {
    on: "./images/makimaa.png",
  },
  power: {
    on: "./images/imagem_power_on.png",
  },
  aki: {
    on: "./images/imagem_aki_on.png",
  },
  kishibe: {
    on: "./images/imagem_kishibe_on.png",
  },
  wall: {
    on: "./images/imagem_kishibe_on.png",
  },
};

var textMap = {
  denji: "Makima",
  power: "Asa",
  aki: "Reze",
};

var originalImageMap = {};
var originalTextMap = {};
var originalWallpaperBackground = "";

// Salva as imagens originais
Object.keys(imageMap).forEach(function (id) {
  var element = document.getElementById(id);
  if (element) {
    originalImageMap[id] = element.getAttribute("src");
  }
});

// Salva os textos originais
Object.keys(textMap).forEach(function (id) {
  var element = document.getElementById(id + "h"); // Adiciona 'h' para selecionar o h1 correspondente
  if (element) {
    originalTextMap[id] = element.textContent;
  }
});

// Salva o fundo original do elemento #wallpapers
var wallpapersElement = document.getElementById("wallpapers");
if (wallpapersElement) {
  originalWallpaperBackground =
    window.getComputedStyle(wallpapersElement).backgroundImage;
}

document.getElementById("off").addEventListener("click", function () {
  changeImagesAndTexts("off");
  changeWallpaperBackground("off");
  addAnimationClasses(this);
});

document.getElementById("on").addEventListener("click", function () {
  changeImagesAndTexts("on");
  changeWallpaperBackground("on");
  addAnimationClasses(this);
});

function changeImagesAndTexts(state) {
  // Altera as imagens
  Object.keys(imageMap).forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      var imagePath = imageMap[id][state];
      element.setAttribute("src", imagePath);
    }
  });

  // Altera os textos
  Object.keys(textMap).forEach(function (id) {
    var element = document.getElementById(id + "h");
    if (element) {
      var newText = textMap[id];
      element.textContent = newText;
    }
  });
}

function changeWallpaperBackground(state) {
  var wallpapersElement = document.getElementById("wallpapers");
  if (wallpapersElement) {
    var backgroundImagePath =
      state === "off"
        ? "url('./images/nova_imagem_de_fundo_off.jpg')"
        : "url('./images/nova_imagem_de_fundo_on.jpg')";
    wallpapersElement.style.backgroundImage = backgroundImagePath;
  }
}

// Função para adicionar classes de animação
function addAnimationClasses(button) {
  button.classList.add("rotate");
  setTimeout(function () {
    button.classList.remove("rotate");
  }, 300); // Tempo de duração da rotação
}

// Adiciona um evento para restaurar as imagens originais e textos originais quando clicar novamente em "off"
document.getElementById("off").addEventListener("click", function () {
  var isOff = this.getAttribute("data-state") === "off";
  if (isOff) {
    restoreOriginalImagesAndTexts();
    restoreOriginalWallpaperBackground();
  }
  this.setAttribute("data-state", isOff ? "on" : "off");
});

// Função para restaurar as imagens originais e textos originais
function restoreOriginalImagesAndTexts() {
  // Restaura as imagens originais
  Object.keys(originalImageMap).forEach(function (id) {
    var element = document.getElementById(id);
    if (element) {
      element.setAttribute("src", originalImageMap[id]);
    }
  });

  // Restaura os textos originais
  Object.keys(originalTextMap).forEach(function (id) {
    var element = document.getElementById(id + "h");
    if (element) {
      var originalText = originalTextMap[id];
      element.textContent = originalText;
    }
  });
}

// Função para restaurar o fundo original do elemento #wallpapers
function restoreOriginalWallpaperBackground() {
  var wallpapersElement = document.getElementById("wallpapers");
  if (wallpapersElement) {
    wallpapersElement.style.backgroundImage = originalWallpaperBackground;
  }
}

// Containers

// Armazena o estado original do background do #container

// Armazena o estado original do background do #container
var originalContainerBackground =
  document.getElementById("container").style.background;

document.getElementById("on").addEventListener("click", function () {
  var containerColor = "linear-gradient(rgba(243, 5, 5, 0), rgb(241, 11, 11))";
  document.getElementById("container").style.background = containerColor;

  var liContainers = document.getElementsByClassName("li-container");
  for (var i = 0; i < liContainers.length; i++) {
    liContainers[i].style.background = containerColor;
  }

  // Altera o texto dentro do #container
  document.getElementById("container").querySelector("p").textContent =
    "Novo texto para o container";
});

document.getElementById("off").addEventListener("click", function () {
  // Restaura o background original do #container
  document.getElementById("container").style.background =
    originalContainerBackground;

  var liContainers = document.getElementsByClassName("li-container");
  for (var i = 0; i < liContainers.length; i++) {
    liContainers[i].style.background = originalContainerBackground;
  }

  // Restaura o texto dentro do #container
  document.getElementById("container").querySelector("p").textContent =
    "Em uma realidade onde demônios podem fazer contratos com humanos, concedendo poderes a eles após um pacto, a trama da animação japonesa acompanha o jovem Denji, um adolescente que enfrenta complicações financeiras por conta de dívidas deixadas por seu pai em relação à organização criminosa Yakuza..";
});
