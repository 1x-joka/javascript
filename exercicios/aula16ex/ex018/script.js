let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // Criando o array

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // Se o número tiver entre 1 e 100
        return(true)
    } else {
        return(false)
    }
}

function inLista(n, vetor) { // l é somente um parâmetro, ele representa a lista de valores adicionados
    if (vetor.indexOf(Number(n)) != -1) { // Verificando se o numero está na lista
        return(true)
    } else {
        return(false)
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Se for um número E se não tiver na lista
        valores.push(Number(num.value)) // Adicionando o valor ao array
        let item = document.createElement('option') // Criando a tag option
        item.text = `Valor ${num.value} adicionado` // Mostrando visualmente que foi adicionado
        lista.appendChild(item) // Atribuindo o valor adicionado aos input's
        res.innerHTML = '' // Quando eu adicionar um novo elemento, ele limpa
    } else {
        alert('[ERRO} Valor inválido ou já encontrado na lista')
    }

    num.value = '' // Apagando o input toda vez que clicar
    num.focus() // Focando o cursor automaticamente no select
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let total = valores.length // Quantos elementos tem no array
        let soma = 0
        let media = 0

        // Enquanto tiver apenas UM número, o maior e o menor é ele mesmo
        let maior = valores[0]
        let menor = valores[0]

        // Condição para caso tenha mais do que ele
        for(let pos in valores) { // Para cada posição nos valores...
            soma += valores[pos] // Soma o valor atual com o da posição da volta
            if (valores[pos] > maior) // Verifica se o valor da posição atual (valores[pos]) é maior do que a variável (maior) / pos = índice e valores[pos] é o valor correspondente naquela posição
                maior = valores[pos] // Atribuindo o valor do maior numero ao "maior"
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total

        res.innerHTML = '' // Zerando o valor
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML += ` <p> O maior valor informado foi ${maior}`
        res.innerHTML += `<p> O menor valore informado foi ${menor}`
        res.innerHTML += `<p> Somando todos os valores temos ${soma}`
        res.innerHTML += `<p> A média dos valores digitados é ${media}`
    }
}

function limpar() {
    lista.innerHTML = '' // Limpando a tabela
    res.innerHTML = '' // Limpando a resposta
    valores = [] // Limpando o array
    num.value = '' // Limpando a caixa
    num.focus() // Voltando o foco nela
}