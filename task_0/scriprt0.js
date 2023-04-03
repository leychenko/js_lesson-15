//================================= Задача 0 ====================================
// Задача 0. Задача 0. Дано два об’єкта. Обидва містять масив цілих чисел. При цьому у одному з них є функція знаходження суми, а у іншому – функція для знаходження добутку тих, які знаходяться між заданими мінімальним і максимальних значенням.
// Використати обидва методи стосовно обидвох об’єктів (використати call, apply)

let obj1 = {
  arrNumber: [6, 9, 7, 11, 2, 4, 4, 3],
  getSumNumbers: function (min, max) {
    let sum = 0
    for (let i = min; i <= max; i++) {
      sum += this.arrNumber[i]
    }
    return sum
  },
}
 let obj2 = {
  arrNumber: [6,9,8,11,2,8,7,3],
  getMultiply : function (min,max) {
		let sum = 1
		for (let i = min; i <= max; i++) {
			sum *= this.arrNumber[i]
    }
			return sum
  	},
 }
let resultObjApply = obj2.getMultiply.apply(obj1, [2, 5])
let resultObjCall = obj2.getMultiply.call(obj1, 2, 5)
let resultObjApply2 = obj1.getSumNumbers.apply(obj2, [2, 5])
let resultObjCall2 = obj1.getSumNumbers.call(obj2, 2, 5)

document.write(`<p>Добуток масиву (apply): <span>${resultObjApply}</span></p>`)
document.write(`<p>Добуток масиву (call): <span>${resultObjCall}</span></p>`)
document.write(`<p>Cума масиву (apply): <span>${resultObjApply2}</span></p>`)
document.write(`<p>Cума масиву (call): <span>${resultObjCall2}</span></p>`)