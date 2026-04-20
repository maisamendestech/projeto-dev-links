function toggleMode() {
    const html = document.documentElement
     html.classList.toggle('light')

  //  if(html.classList.contains('light')) {
  //      html.classList.remove('light')
  //  } else{
  //      html.classList.add('light')
  //  }

  //pegar a tag img (mesmo seletor css)
 const img= document.querySelector("#profile img")

  //subistituir a imagem
   if(html.classList.contains('light')){
  //se tiver light mode, adicionat a imagem light
  img.setAttribute('src', './assets/avatar-light.png')
   }else{
  //se tiver sem light mode, manter a normal
  img.setAttribute('src', './assets/avatar.png')
   }

 

 
}