function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked ) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src', 'babymale.png')
            } else if (idade < 25) {
                img.setAttribute ('src', 'youngmale.png')
            } else if (idade < 60) {
                img.setAttribute ('src', 'adultmale.png')
            } else {
                img.setAttribute ('src', 'oldmale.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute ('src', 'babyfemale.png')
            } else if (idade < 25) {
                img.setAttribute ('src', 'youngfemale.png')
            } else if (idade < 60) {
                img.setAttribute ('src', 'adultfemale.png')
            } else {
                img.setAttribute ('src', 'oldfemale.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}