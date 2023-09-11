// const answerOfPrompt = prompt('Tell me a number')
// // возвращает либо string либо null
// console.log(answerOfPrompt);
// console.log(Number(answerOfPrompt));
// console.log(typeof Number(answerOfPrompt)) //
// console.log(typeof +answerOfPrompt) //
// const sumNumbers = 4 + answerOfPrompt
// console.log(sumNumbers)

// // преобразовать строку в число поставить + перед строкой
// const stringNumber = '2'
// const stringToNumber = +stringNumber
// const useNumberObject = Number(stringNumber)

// let a = 1
// a = a + 1
// a++
// a += 2
// a -= 2
// a *= 2

const stringNumber1 = '2'
const justNumber = 2
// сравнение с приведением типов
console.log(stringNumber1 == justNumber);

//строгое сравнение
console.log(Number(true));
console.log(Number(false));
//сравниваются типы
console.log(stringNumber1 === justNumber);

console.log(Number(true) === 0);
console.log(false == 0);
console.log(false === 0);

//всегда используем строгое  сравнение (===)

console.log(1 != '1'); // false
console.log(1 !== '1'); // true

const arrOfNum = [1, 2, 3, 4, 6]
// for (let i = 0; i < arrOfNum.length; i++) {
//     console.log(arrOfNum[i]);
    
// }

for (let i = arrOfNum.length - 1; i >= 0; i--) {
    console.log(arrOfNum[i]);
    
}

    
