/*

const items = document.querySelectorAll('.item')
items.forEach((item) => console.log(item)) --> Mostra no console todos os itens

const ul = document.querySelector('.items')

ul.remove() --> Remove todos os itens
ul.lastElementChild.remove() --> Remove o último item
ul.firstElementChild.remove() --> Remove o primeiro item
ul.children[1].innerText = 'Brad' --> Substituindo o nome do 2° item para 'Brad'
ul.lastElementChild.innerHTML = '<h1>Hello Word</h1>' --> Transformando o último item e colocando uma tag de HTML

const btn = document.querySelector('.btn')
btn.style.background = 'red' --> Faz o botão ficar vermelho
btn.addEventListener('mouseover', (e) => { --> Quando o clique acontecer, a arrow function será executada; o parâmetro "e" é o evento do clique
    e.preventDefault()  --> Impede o comportamento padrão dele (enviar o formulário e ter o reload da página)
    console.log(e.target.class) --> Mostra as "coordenadas" do botão (nesse caso a classe)
    document.querySelector('#my-form').style.background = '#ccc' --> Muda o background do que está com id "my-form"
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Surpresa</h1>'
    document.querySelector('body').classList.add('bg-dark') --> Adiciona a classe css bg-dark ao elemento body
})

*/

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onsubmit)

function onsubmit(e) {
    e.preventDefault()
    // console.log(nameInput.value) --> Aparece o nome no console

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error') // Adiciona as propriedades "error" à div msg
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000) // A div 'msg' desaparece após 3000ms
    } else {
        const dados = document.createElement('li') // Cria um novo elemento HTML <li> na memória
        dados.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) // Insere um texto com o conteúdo digitado nos campos nameInput e emailInput; appendChild = Adiciona um elemento (filho no pai); createTextNode = Cria um texto que será inserido dentro do elemento HTML
        userList.appendChild(dados) // Pega o elemento 'dados' e coloca dentro da lista (ul no HTML) userList

        // Clear Fields
        nameInput.value = ''
        emailInput.value = ''
    }
}