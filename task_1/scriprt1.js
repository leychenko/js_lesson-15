//================================= Задача 1 ====================================
// Задача 1. Створити об’єкт «Тир». У масиві зберігаються 1, якщо у цьому квадраті є заєць і 0 в іншому випадку.
// ================
// Поля(властивості)
// Масив, у якому зберігається поле з зайцями
// ================
// Методи (дії)
// Метод пострілу (задається позиція пострілу)
// Виведення ігрового поля

function ShootingRange(shootValue,min,max) {
  this.field = this.getRandomNum(shootValue, min, max)
}
ShootingRange.prototype.getRandomNum = function (shootValue, min, max) {
  let shootField = []
  for (let i = 0; i < shootValue; i++) {
    const random = min + Math.floor(Math.random() * (max - min + 1))
    shootField.push(random)
  }
  return shootField
}
ShootingRange.prototype.countRabbits = function () {
	let rabbits = 0
	for (const key in this.field) {
		if (this.field[key] === 1) rabbits++
  }
  return rabbits
}



ShootingRange.prototype.startGame = function () {
	let quantityRabbits = this.countRabbits()
	while (quantityRabbits > 0) {
		let userValue = parseInt(prompt('Введіть номер поля для пострілу'))
		if (this.field[userValue] === 1) {
      quantityRabbits--
      this.field[userValue] = 0
      alert("-1 заєць")
    } else alert("Промазав")
	}

	
}

let shootRabbit = new ShootingRange(8,0,1)
document.write(`Ігрове поле з зайцями : ${shootRabbit.field}`)
console.log(shootRabbit.countRabbits())
shootRabbit.startGame()

