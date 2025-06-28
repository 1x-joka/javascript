function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // Pega o ano com 4 dígitos
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#resultado')

    if (fano.value.length == 0 || Number(fano.value) > ano) { // Verifica se o comprimento do valor é 0 (caixa vazia) ou se o valor é acima de ano (o usuário nasceu depois do ano atual ?)
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value) // Calculando a idade
        var genero = '' // Começando com string vazia para depois preenchermos
        var img = document.createElement('img') // Criando uma tag img
        img.setAttribute('id', 'foto') // Colocando um id foto no img

        if (fsex[0].checked) { // Caso o gênero marcado seja o [0] (homem)
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/bebe-homem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/adulto-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idoso-homem.png')
            }
        } else {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/bebe-mulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/adulta-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos o gênero ${genero} com ${idade} anos`
        res.appendChild(img) // Adicionando as imagens ABAIXO da legenda
    }
}