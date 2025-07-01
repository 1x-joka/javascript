let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou') // Caso eu aumente o peso
        this.peso += p // Cálculo para o aumento
    }}

amigo.engordar(3) // Engordando 3kg

console.log(typeof amigo)
console.log(amigo)
console.log('----------------------------------')
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)