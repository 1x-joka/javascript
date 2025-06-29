function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!!')
        res.innerHTML = 'IMPOSSÍVEL CONTAR!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) // Convertendo o que está dentro do input para número
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo Inválido! Considerando PASSO = 1')
            p = 1
        }

        if (i < f) {
            for(let c = i; c <= f; c += p) { // Criando um contador / O contador vai começar no inicio; Enquanto o contador for menor ou igual ao fim; O contador vai receber ele mesmo mais o passo
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }

        res.innerHTML += `\u{1F3C1}` // Colocar fora das condições e repetições
    }
}