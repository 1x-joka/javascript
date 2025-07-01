let num = [5, 8, 2, 9, 3] // Criando meu vetor/array
num.sort() // Organizando em ordem crescente
num.push(1) // O 1 não ficou na ordem crescente pois esse comando já foi dado, caso você queira adicionar em ordem crescente e deixar o 1 no começo é só colocar o "num.push(1)" antes do sort

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)