//1. Undefined, null i niezadeklarowana

// Zmienna undefined jest zmienną, która została zadeklarowana, ale nie ma przypisanej wartości
var test 

console.log(test)
console.log(test === undefined)

// Zmienna null
// Nie reprezentuje żadnej wartości i różni się od undefined w tym sensie, że zostało to wyraźnie przypisane
const test2 = null

console.log(test2)
console.log(test2 === null)

console.log('---')

// 2. // MAP VS forEACH - "map jest szybszy 60% od ForEach'a"
const numbers = [50, 60, 70]

// forEach- Undefined bo nie tworzy nowej tablicy 
console.log(numbers.forEach(el => el))

// użycie forEach - gdy chcemy klkniąc w btn na stronie 
// Jeśli potrzebujemy po prostu literować tablicę, forEach jest dobrym wyborem.
const btn = document.querySelector('.btn')
const btn2 =document.querySelector('.btn2')

btn.addEventListener('click', ()=> {
    console.log('kliknięto')
})

const clickTwo = () => {
    console.log('Kliknięto w 2 przycisk')
}

btn2.addEventListener('click', clickTwo)

// map - zwraca nową tablicę 
console.log(numbers.map(el => el * 2))


console.log('---')

// 3. Funkcja zwykła i funkcja strzałkowa 

// zwykła posiada argumenty a strzałkowa NIE POSIADA
// W zwykłej funkcji będziemy mieć wynik a w strzałkowej: ReferenceError: arguments is not defined
function yourNumber () {
    console.log(arguments)
}

yourNumber(1, 2, 3)

const yourNumberTwo = () => {
    console.log(arguments)
}

yourNumberTwo(1, 2, 3)


