

//================================= Задача 3 ====================================
// Задача 3.Розробити клас MultChecker для перевірки таблиці множення
// ======================
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// ======================
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран

class MultChecker {
  constructor(userNumber,minValue,maxValue) {
    this.userNumber = userNumber
	 this.minValue = minValue
	 this.maxValue = maxValue
  }
  getRAndomNum(){
	return (
    this.minValue +
    Math.floor(Math.random() * (this.maxValue - this.minValue + 1))
  )
  }
  isTrueAnswer(){
	let count = 0
	for (let i = 0; i < this.maxValue; i++) {
	let randomChoiseNum = this.getRAndomNum()
    const userAnswer = parseInt(
      prompt(`${this.userNumber} * ${randomChoiseNum}\n Введіть відповідь`)
    )
	 if (this.userNumber * randomChoiseNum === userAnswer) count++
  }
  return count
  }
  toString(){
	return `${this.count}`
  }
}
let test = new MultChecker(7,1,9)
document.write(
  `<p>Ваш результат : <br> Правельних відповідей - <span>${test.isTrueAnswer()}</span></p>`
)





