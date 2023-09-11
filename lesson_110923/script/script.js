// Сравниваются по ссылке в памяти
const obj1 = { x: 1 } // место в памяти
const obj2 = { x: 1 } // другое место в памяти
const arr1 = [1]
const arr2 = [1]
//сравниваются ссылки
console.log(arr1 === arr2) // false
// одно место не равно другому
console.log(obj1 === obj2) // false

// выпустили вторую банк карту
// копируем не объект, а ссылку
// перезаписываем исходный объект
const obj3 = { x: 2, y: 3 }
const obj4 = obj3
obj4.x = 4
console.log(obj3)
console.log(obj4 === obj3) // true / false

const user = {
    name: "Ivan",
    city: "Berlin"
}

const usersCity = user.city

// let const
const firstConstantVariable = 'a'
// TypeError: Assignment to constant variable.
firstConstantVariable = 'b'

let secondVariable = 'a' // строка
secondVariable = 1 // число
secondVariable = true // boolean
secondVariable = undefined
secondVariable = null
console.log(secondVariable)

let thirdVariable
thirdVariable = 2;
console.log(thirdVariable)



    