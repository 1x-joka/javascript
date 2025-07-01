let num = [5, 8, 2, 9, 3] // Criando meu vetor/array
num.sort() // Organizando em ordem crescente
num.push(1) // O 1 não ficou na ordem crescente pois esse comando já foi dado, caso você queira adicionar em ordem crescente e deixar o 1 no começo é só colocar o "num.push(1)" antes do sort

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8) // Buscando qual a chave do conteúdo 8
console.log(`O valor 8 está na posição ${pos}`) // Ele está na posição 3 pois o sort() colocou em forma crescente

let pos2 = num.indexOf(4)

if(pos2 == -1) { // Caso não tenha 4 na array...
    console.log('O valor não foi encontrado')
} else { // Caso tenha, irá mostrar
    console.log(`O valor está na posição ${pos2}`)
}