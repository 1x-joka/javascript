function parimpar(n) {
    if(n % 2 == 0){
        return('Par!')
    } else {
        return('Ímpar')
    }
}

let res = parimpar(12)
console.log(res)
console.log(parimpar(12)) // Outra forma, sem usar variável