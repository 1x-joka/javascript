function gerar() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('itabuada')

    if(num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // Antes de mostrar a tabuada, ele limpa o select e depois segue o programa
        while(c <= 10) {
            let item = document.createElement('option') // Criando um elemento option em JS
            item.text = `${n} x ${c} = ${n*c}` // item.text = Parte de dentro do option
            item.value = `tab${c}` // Previnindo erros no PHP (Opcional POR ENQUANTO)
            tab.appendChild(item) // Adicionando um elemento filho (item)
            c++
        }
    }
}