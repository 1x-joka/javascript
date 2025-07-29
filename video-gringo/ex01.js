// Strings, Numbers, Boolean, Null, Undefined

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof x);
console.log(typeof z)

const s = 'Hello World'
console.log(s.length) // Quantos caracteres tem (inclusive espaços)
console.log(s.substring(0, 5)) // Pega os caracteres do índice 0 até 0 4 / Caso o segundo parâmetro for menor que o segundo, ele também aceita / Não aceita números negativos
console.log(s.substring(4, 0))
console.log(s.split("")) // Separa a string em cada caractere
console.log(s.split(",")) // Procura algum caractere com vírgula para separar

const a = 'technology, computers, it, code'
console.log(a.split(','))

const nome = 'Joaquim'
console.log(nome.slice(1, 4)) // Do índice 1 até antes do 4
console.log(nome.slice(-3)) // Do final pra trás, pega os três últimos caracteres
// A diferença do slice para o substring é que ele aceita parâmetros negativos mas não inverte

// Arrays - Variáveis que guardam múltiplos valores
const fruits = ['apples', 'oranges', 'pears']
fruits[3] = 'grapes'
fruits.push('mangos') // Adiciona o 'mangos' no final
fruits.unshift('strawberries') // Adiciona o 'strawberries' no início
fruits.pop() // Remove o último item
console.log(Array.isArray('hello')) // Retorna "true" se o valor passado for um array
console.log(fruits.indexOf('oranges')) // Mostra a posição do 'oranges'
console.log(fruits)

// Objetos Aninhados

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person)
console.log(person.firstName, person.lastName) // Retorna o nome todo
console.log(person.hobbies[1])
console.log(person.address.city)

const {firstName, lastName, address: {city}} = person; // "Pega firstName e lastName direto do objeto person", Vai até person.address e pega a propriedade city e crie três variáveis (firstName John, lastName Doe e city Boston)
console.log(firstName)
console.log(city) // Retorna Boston / Não use console.log(address) pois "address" em si não vira uma variável

person.email = 'john@gmail.com'
console.log(person) // Retorna todo o objeto, mas agora com o email

// Array de Objetos
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

console.log(todos[1].text) // Retorna 'Meeting with boss'

const todoJSON = JSON.stringify(todos) // Converte o array de objetos "todos" em uma string JSON
console.log(todoJSON)

const todosParsed = JSON.parse(todoJSON) // Converte a string JSON de volta em um objeto JavaScript
console.log(todosParsed)