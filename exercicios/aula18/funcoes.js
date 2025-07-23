let valor = 20

function incrementa() { // Função Void (Função Vazia) = Não retorna nada, está apenas alterando
    valor += 30
}
incrementa()
console.log(valor)

function mostraNome(nome) { // Função com parâmetro = O que está dentro do mostraNome la embaixo é mandado no lugar de "nome" e executa o que está dentro da function
    console.log(nome)
}
mostraNome('Joaquim')

function soma(n1, n2) { // Função Return = Retorna um valor para fora dela
    const s = n1 + n2
    return s
}
const sum = soma(10, 5)
console.log(sum)

const mult = (numero1, numero2) => { // Função Arrow / Arrow Function
    return numero1 * numero2
}
console.log(mult(10, 4))

// const mult = (numero1, numero2) => numero1 * numero2 / Outra forma