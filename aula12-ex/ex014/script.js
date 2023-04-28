function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#FFE656'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#D8864C'
    } else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#04162C'
    }
}