function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Desenho do Saduske, usando uma blusa florida roxa e oculos, e da Duda,usando uma jaqueta preta com cabelo rosado e brincos de caveira, se abraçando"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    // se tiver sem light mode, manter a imagem normal
  }
}

// if(html.classList.contains('light')) {
//   html.classList.remove ('light')
// } else {
//   html.classList.add('light')
// }
