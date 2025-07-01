let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)
/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++) { // Declarando como ela vai começar; Enquanto pos for menor do que o comprimento do vetor; Adicionará +1 no loop do valor do pos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores) { // Para cada posição em valores...
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}