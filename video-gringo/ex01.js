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

// Estrutura For
for (let i = 0; i <= 10; i++) { // Enquanto i <= 10, ele adiciona mais 1, começa em 0
    console.log(`For loop number: ${i}`)
}

for (let x = 0; x < todos.length; x++) {
    console.log(todos[x].text)
}

for (let todo of todos) { // a cada volta, "todo" vai ser um dos objetos do array "todos"
    console.log(todo.id)
}

// Estrutura While
let i = 0
while (i < 10) {
    console.log(`While loop number: ${i}`)
    i++
}

// forEach, map, filter --> Iterações com métodos de arrays
todos.forEach(function(todo) { // A função é executada para cada objeto todo e imprime a propriedade text de cada um
    console.log(todo.text)
})

const todoText = todos.map(function(todo) { // Aplica-se map() ao array todos para pegar só os textos (text) de cada tarefa; Ele está criando um novo array (chamado todoText) para retornar os textos de cada elemento do "todos"
    return todo.text
})
console.log(todoText)

const todoCompleted = todos.filter(function(todo) { // Está criando um novo array (chamado todoCompleted) contendo só as tarefas concluídas
    return todo.isCompleted === true // todo.isCompleted acessa a propriedade que indica se a tarefa foi concluída; === true verifica se essa propriedade é exatamente igual a true (valor booleano verdadeiro)
})
console.log(todoCompleted)

const todoCompleted2 = todos.filter(function(todo) {
    return todo.isCompleted === true
}).map(function(todo) { // Eu filtro as tarefas concluídas e depois crio um array com elas e retorno-o
    return todo.text
})
console.log(todoCompleted2)

// Estruturas Condicionais
const alpha = 10

if (alpha === 10) {
    console.log('alpha is 10')
} else if (alpha > 10) {
    console.log('alpha is greater than 10')
} else {
    console.log('alpha is less than 10')
}

const alpha2 = 4
const beta = 11

if (alpha2 > 5 || beta > 10) {
    console.log('alpha2 is more than 5 or beta is more than 10')
}

// Operador Ternário
const gama = 11
const color = gama > 10 ? 'red' : 'blue' // Se gama for maior que 10, a variável "color" recebe 'red', se não, ela recebe 'blue'

switch(color) { // switch vai comparar o valor de 'color' com os case
    case 'red':
        console.log('color is red')
        break // Essencial para impedir que o switch continue executando os próximos blocos depois de encontrar o case certo
    case 'blue':
        console.log('color is blue')
        break
    default: // Só executa se nenhuma das condições acima batesse
        console.log('color is NOT red or blue')
        break
}

// Function's

function addNums(num1 = 0, num2 = 0) {
    return num1 + num2
}

console.log(addNums())

const addNums2 = (num3 = 0, num4 = 0) => { // Arrow Function
    return num3 + num4
}

console.log(addNums2(5, 7))