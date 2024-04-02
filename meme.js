//capturo botones texto e imagen

const botonImagen = document.getElementById("botonImagen");
const botonTexto = document.getElementById("botonTexto");

const asideImagen = document.getElementById("asideImagen");
const asideTexto = document.getElementById("asideTexto");

//eventos de botones imagen

botonImagen.addEventListener("click", () => {
  asideImagen.style.display = "block";
  asideTexto.style.display = "none";
});

//evento boton texto
botonTexto.addEventListener("click", () => {
  asideTexto.style.display = "block";
  asideImagen.style.display = "none";
});

//boton claro/oscuro
const botonModo = document.getElementById("botonModo");
const miHeader = document.getElementById("miHeader");
const iconoModo = document.getElementById("iconoModo");

let modoClaroOscuro = "Modo Oscuro";
botonModo.addEventListener("click", () => {
  if (modoClaroOscuro === "Modo Claro") {
    document.body.style.backgroundColor = "#30343f";
    document.body.style.color = "white";
    miHeader.style.backgroundColor = "#191e2b";
    asideImagen.style.backgroundColor = "#252935";
    asideTexto.style.backgroundColor = "#252935";
    iconoModo.textContent = modoClaroOscuro;
    modoClaroOscuro = "Modo Oscuro";
  } else if (modoClaroOscuro === "Modo Oscuro") {
    document.body.style.backgroundColor = "#eee";
    document.body.style.color = "black";
    miHeader.style.backgroundColor = "#e0e0e0";
    asideImagen.style.backgroundColor = "#fafafa";
    asideTexto.style.backgroundColor = "#fafafa";
    iconoModo.textContent = modoClaroOscuro;
    modoClaroOscuro = "Modo Claro";
  }
});

//para traer la img
document.getElementById("url").addEventListener("change", () => {
  cargarUrl();
});

let divImage = document.getElementById("meme-image");

function cargarUrl() {
  let valueInputUrl = document.getElementById("url").value;
  divImage.style.backgroundImage = "url('" + valueInputUrl + "')";
}

//para cambiar fondo de color
let colorFondo = document.getElementById("input-back-color");

colorFondo.addEventListener("change", () => {
  divImage.style.backgroundColor = colorFondo.value;
});

//mezclar color de fondo con imagen
let selectColorFondo = document.getElementById("select-back-color");
let ninguno = document.getElementById("ninguno");
let aclarar = document.getElementById("aclarar");
let oscurecer = document.getElementById("oscurecer");
let diferencia = document.getElementById("diferencia");
let luminosidad = document.getElementById("luminosidad");
let multiplicar = document.getElementById("multiplicar");

selectColorFondo.addEventListener("change", () => {
  mezclarImgFondo(selectColorFondo);
});

//menu desplegable del color de fondo
const mezclarImgFondo = (selectColorFondo) => {
  if (selectColorFondo.value === "ninguno") {
    divImage.style.backgroundBlendMode = "normal";
  }
  if (selectColorFondo.value === "aclarar") {
    divImage.style.backgroundBlendMode = "lighten";
  }
  if (selectColorFondo.value === "oscurecer") {
    divImage.style.backgroundBlendMode = "darken";
  }
  if (selectColorFondo.value === "diferencia") {
    divImage.style.backgroundBlendMode = "difference";
  }
  if (selectColorFondo.value === "luminosidad") {
    divImage.style.backgroundBlendMode = "luminosity";
  }
  if (selectColorFondo.value === "multiplicar") {
    divImage.style.backgroundBlendMode = "multiply";
  }
};

//filtros de imagen
let brillo = document.getElementById("brillo");
let opacidad = document.getElementById("opacidad");
let contraste = document.getElementById("contraste");
let desenfoque = document.getElementById("desenfoque");
let grises = document.getElementById("grises");
let sepia = document.getElementById("sepia");
let hue = document.getElementById("hue");
let saturado = document.getElementById("saturado");
let negativo = document.getElementById("negativo");

brillo.addEventListener("change", filtrosImg);
opacidad.addEventListener("change", filtrosImg);
contraste.addEventListener("change", filtrosImg);
desenfoque.addEventListener("change", filtrosImg);
grises.addEventListener("change", filtrosImg);
sepia.addEventListener("change", filtrosImg);
hue.addEventListener("change", filtrosImg);
saturado.addEventListener("change", filtrosImg);
negativo.addEventListener("change", filtrosImg);

function filtrosImg() {
  let filtros = "";
  if (brillo.value !== "1") {
    console.log(filtros);
    filtros += `brightness(${brillo.value})`;
  }
  if (opacidad.value !== "1") {
    filtros += `opacity(${opacidad.value})`;
  }
  if (contraste.value !== "100") {
    filtros += `contrast(${contraste.value}%)`;
  }
  if (desenfoque.value !== "0") {
    filtros += `blur(${desenfoque.value}px)`;
  }
  if (grises.value !== "0") {
    filtros += `grayscale(${grises.value}%)`;
  }
  if (sepia.value !== "0") {
    filtros += `sepia(${sepia.value}%)`;
  }
  if (hue.value !== "0") {
    filtros += `hue-rotate(${hue.value}deg)`;
  }
  if (saturado.value !== "100") {
    filtros += `saturate(${saturado.value}%)`;
  }
  if (negativo.value !== "0") {
    filtros += `invert(${negativo.value})`;
  }

  divImage.style.filter = filtros.trim();
}

//botón restablecer filtros
const botonRestablecerFiltros = document.getElementById(
  "botonRestablecerFiltros"
);
botonRestablecerFiltros.addEventListener("click", () => {
  brillo.value = "1";
  opacidad.value = "1";
  contraste.value = "100";
  desenfoque.value = "0";
  grises.value = "0";
  sepia.value = "0";
  hue.value = "0";
  saturado.value = "100";
  negativo.value = "0";

  filtrosImg();
});

//      PANEL DE TEXTO

//texto superior
const textoSup = document.getElementById("textoSup");
const textoSupNo = document.getElementById("textoSupNo");
const textoSupP = document.getElementById("textoSupP");

textoSup.addEventListener("keyup", () => {
  textoSupP.textContent = textoSup.value;
});

textoSupNo.addEventListener("click", () => {
  if (textoSupNo.checked) {
    textoSupP.style.visibility = "hidden";
  } else {
    textoSupP.style.visibility = "visible";
  }
});

//texto inferior
const textoInf = document.getElementById("textoInf");
const textoInfNo = document.getElementById("textoInfNo");
const textoInfP = document.getElementById("textoInfP");

textoInf.addEventListener("keyup", () => {
  textoInfP.textContent = textoInf.value;
});
textoInfNo.addEventListener("click", () => {
  if (textoInfNo.checked) {
    textoInfP.style.visibility = "hidden";
  } else {
    textoInfP.style.visibility = "visible";
  }
});

//cambiar fuente o tipo de letra
const tipoFuente = document.getElementById("tipoFuente");
const arial = document.getElementById("arial");
const arialBlack = document.getElementById("arialBlack");
const americanTypewriter = document.getElementById("americanTypewriter");
const andaleMono = document.getElementById("andaleMono");
const comicSansMs = document.getElementById("comicSansMs");
const helvetica = document.getElementById("helvetica");
const impact = document.getElementById("impact");
const verdana = document.getElementById("verdana");
const timesNewRoman = document.getElementById("timesNewRoman");

tipoFuente.addEventListener("change", () => {
  cambiarFuentes(tipoFuente);
});
const cambiarFuentes = (tipoFuente) => {
  if (tipoFuente.value === "arial") {
    textoSupP.style.fontFamily = "arial";
    textoInfP.style.fontFamily = "arial";
  }
  if (tipoFuente.value === "arialBlack") {
    textoSupP.style.fontFamily = "Arial Black";
    textoInfP.style.fontFamily = "Arial Black";
  }
  if (tipoFuente.value === "americanTypewriter") {
    textoSupP.style.fontFamily = "American Typewriter";
    textoInfP.style.fontFamily = "American Typewriter";
  }
  if (tipoFuente.value === "andaleMono") {
    textoSupP.style.fontFamily = "'Andale Mono', monospace";
    textoInfP.style.fontFamily = "'Andale Mono', monospace";
  }
  if (tipoFuente.value === "comicSansMs") {
    textoSupP.style.fontFamily = "Comic Sans Ms";
    textoInfP.style.fontFamily = "Comic Sans Ms";
  }
  if (tipoFuente.value === "helvetica") {
    textoSupP.style.fontFamily = "helvetica";
    textoInfP.style.fontFamily = "helvetica";
  }
  if (tipoFuente.value === "impact") {
    textoSupP.style.fontFamily = "impact";
    textoInfP.style.fontFamily = "impact";
  }
  if (tipoFuente.value === "verdana") {
    textoSupP.style.fontFamily = "verdana";
    textoInfP.style.fontFamily = "verdana";
  }
  if (tipoFuente.value === "timesNewRoman") {
    textoSupP.style.fontFamily = "Times New Roman";
    textoInfP.style.fontFamily = "Times New Roman";
  }
};

//tamaño fuente

const tamanoFuente = document.getElementById("tamanoFuente");

tamanoFuente.addEventListener("change", () => {
  textoSupP.style.fontSize = tamanoFuente.value + "px";
  textoInfP.style.fontSize = tamanoFuente.value + "px";
});

//alineación de texto

const alinearIzq = document.getElementById("alineadoIzq");
const alinearCentro = document.getElementById("alineadoCentro");
const alinearDer = document.getElementById("alineadoDer");

alinearIzq.addEventListener("click", () => {
  textoSupP.style.textAlign = "left";
  textoInfP.style.textAlign = "left";
});
alinearCentro.addEventListener("click", () => {
  textoSupP.style.textAlign = "center";
  textoInfP.style.textAlign = "center";
});
alinearDer.addEventListener("click", () => {
  textoSupP.style.textAlign = "right";
  textoInfP.style.textAlign = "right";
});

// Color Fuente
const colorFuente = document.getElementById("colorFuente");

colorFuente.addEventListener("change", () => {
  textoSupP.style.color = colorFuente.value;
  textoInfP.style.color = colorFuente.value;
});

// color de fondo de fuente
const colorFondoP = document.getElementById("colorFondoP");

colorFondoP.addEventListener("change", () => {
  containerImg.style.backgroundColor = colorFondoP.value;
});

//fondo transparnte
const fondoTransparente = document.getElementById("fondoTransparente");

fondoTransparente.addEventListener("click", () => {
  if (fondoTransparente.checked) {
    containerImg.style.backgroundColor = "transparent";
  } else {
    containerImg.style.backgroundColor = "white";
  }
});

//contorno texto
const botonSinContorno = document.getElementById("sinContorno");
const botonContornoClaro = document.getElementById("contornoClaro");
const botonContornoOscuro = document.getElementById("contornoOscuro");

botonSinContorno.addEventListener("click", () => {
  textoSupP.style.textShadow = "none";
  textoInfP.style.textShadow = "none";
});
botonContornoClaro.addEventListener("click", () => {
  textoSupP.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  textoInfP.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
});
botonContornoOscuro.addEventListener("click", () => {
  textoSupP.style.textShadow = "1px 1px 2px rgba(0,0,0,1)";
  textoInfP.style.textShadow = "1px 1px 2px rgba(0,0,0,1)";
});

//espaciado de texto
const espaciado = document.getElementById("espaciado");
espaciado.addEventListener("change", () => {
  textoSupP.style.letterSpacing = espaciado.value + "px";
  textoInfP.style.letterSpacing = espaciado.value + "px";
});

//interlineado
const interlineado = document.getElementById("interlineado");
const ceroOcho = document.getElementById("ceroOcho");
const uno = document.getElementById("uno");
const unoDos = document.getElementById("unoDos");
const unoCinco = document.getElementById("unoCinco");
const dos = document.getElementById("dos");
const dosCinco = document.getElementById("dosCinco");

interlineado.addEventListener("change", () => {
  nuevoInterlineado(interlineado);
});

const nuevoInterlineado = (interlineado) => {
  if (interlineado.value === "ceroOcho") {
    textoSupP.style.lineHeight = "0.8";
    textoInfP.style.lineHeight = "0.8";
  }
  if (interlineado.value === "uno") {
    textoSupP.style.lineHeight = "1";
    textoInfP.style.lineHeight = "1";
  }
  if (interlineado.value === "unoDos") {
    textoSupP.style.lineHeight = "1.2";
    textoInfP.style.lineHeight = "1.2";
  }
  if (interlineado.value === "unoCinco"){
    textoSupP.style.lineHeight = "1.5";
    textoInfP.style.lineHeight = "";
}

};

const botonDescarga = document.getElementById("botonDescarga");

botonDescarga.addEventListener("click", () => {
  new Promise((resolve, reject) => {
    html2canvas(document.getElementById("containerImg"), {
      useCORS: true,
      onrendered: (canvas) => {
        resolve(canvas);
      },
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }).then((canvas) => {
    var a = document.createElement("a");
    a.download = "captured.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
});
