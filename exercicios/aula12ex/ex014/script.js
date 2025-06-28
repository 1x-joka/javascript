function carregar() {
    var msg = document.getElementById('msg') // Jogando a div do HTML para essa variável no JS
    var img = document.getElementById('imagem') // Jogando a img do HTML para essa variável no JS 
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#fee557' // Mudando a cor de fundo por JS quando a condição for verdadeira
    }
    else if (hora >= 12 && hora <= 18) {
        // Boa Tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#fc7002'
    }
    else {
        // Boa Noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#274c8b'
    }
}