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

// const yourNumberTwo = () => {
//     console.log(arguments)
// }

// yourNumberTwo(1, 2, 3)

// 4. JS jest językiem synchronicznym, a wszystkie setTimeouty, fetch, axios, BTN - addEventListener itp. tworzą język ten ASYNCHRONICZNYM 
// setTimeout są to metody Window czyli od Node.js 
// Po to jest asynchroniczność aby np. przeglądarka nie musiała czekać na jakieś akcje, np. pobieranie przez API pogody i żeby 
// strona mogła działać bez problemu 
// Przykład: Tutaj setTimeout wykona się na samym końcu
console.log('Start')

let numb = [1,2,3,4]

function iterateArray(numb) {
    for (let i = 0; i < numb.length; i++) {
        console.log(i)
    }
}

iterateArray(numb)

setTimeout(() => {
    console.log('test')
}, 3000)


console.log('stop')

// 2 przykład 
// Mamy kod, on trafia na STOS, 
// wszytsko co jest asynchroniczne czyli setTimeouty, API pogody trafią na WEB API, potem one trafiają do KOLEJKI 
// EVENT LOOP sa to mechanizmy które cały czas krążą i sprawdzają czy STOS jest pusty => gdy stos jest pusty wtedy wszytskie funkcje z kolejki trafiają na STOS 



// 5. FILTER, MAP, REDUCE 
const myNm = [1, 2, 3, 4, 5, 6, 7, 8]

// filter - tworzy nową tablicę zawierającą tylko te elementy oryginalnej tablicy, które spełniają określony warunek,
// służy do filtrowania elementów tablicy na podstawie określonego warunku
const myNumFilter = myNm.filter((el) => el % 2 == 0)
console.log(myNumFilter)

// map - tworzy nową tablicę, służy do transformacji każdego elementu 
const myNumMap = myNm.map((el) => el * 10)
console.log(myNumMap)

// Reduce - redukuje tablicę do jednego elementu, ostatni parametr to od jakiej liczby ma zacząc liczyć 
const myNumReduce = myNm.reduce((prev, cur) => prev + cur, 0)
console.log(myNumReduce)


// 6. DODAWANIE, EDYCJA, USUWANIE

// dodawanie najlepsze DESTRUKTURYZACJA 
const sport = ['pływanie', 'rower']
const allSport = [...sport, 'bieganie']

console.log(allSport)

// edycja 
const sportEdit = sport.map((el) => el === 'pływanie' ? 'zamiana na rower' : el)
console.log(sportEdit)

// usuwanie 
const sportDelete = sport.filter((el) => el !== 'pływanie')
console.log(sportDelete)


// 7. callback 
//  Callbacki jak skończysz cos robic to uruchom kolejną funkcję 
// są często używane w operacjach asynchronicznych, gdy dana funkcja już zakończyła się wtedy funkcja asynchroniczna jest odpalana 
function greate(yourName, callback) {
    console.log(`Hej, co tam słychać ${yourName}`)
    callback()
}

 function goodbye () {
    console.log('Cześć')
 }

greate('Tomek', goodbye)

// 8. Promise - obietnica - jeżeli coś wykona się to kolejna funkcja zostanie odpalona
// asynchroniczność => Promise 
// Czym różni się promise od callbacka => zapisem, mamy większy porządek: mamy resolve, rejected (then i catch)

const validateDate = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout(() => {
            console.log('Walidacja danych')
            resolve()
        },100)
    }) 
}

const regiserUser = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            console.log('Rejestracja użytkownika')
            resolve()
        }, 300)
    })
}

const saveUser = () => {
    return new Promise ((resolve, rejected) => {
        setTimeout(() => {
            console.log('Zapis użytkownika')
            resolve()
        }, 150)
    })
}

validateDate()
.then(regiserUser)
.then(saveUser)
