var agora = new Date() // Pegando a hora atual do sistema
var hora = agora.getHours // Jogando para a variável "hora"
console.log(`Agora são exatamente ${hora} horas`)

if (hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log('Bom Dia!')
} else if (hora <= 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}