

//================================= Задача 3 ====================================
// Задача 2. Створити об’єкт «Авто». 
// Авто	

// ==============
// Поля(властивості)
// Марка
// Розмір бака
// Кількість наявних літрів
// Кількість місць
// Кількість пасажирів
// =============
// Методи (дії)
// Заправка на вказану кількість літрів
// Виведення кількості пасажирів
// Додавання пасажирів
// Висадка пасажирів

let auto = {
  model: "Ford",
  tank: 60,
  litres: 42,
  countSeat: 5,
  countPassanger: 3,
  getMoreLiters: function (litres) {
	if (this.litres + litres < this.tank) return this.litres + litres
	else return "Не влізе стільки пального"
  },
  getPassenger: function () {
    return this.countPassanger
  },
  getPlusPassenger: function (passenger) {
    if (this.countPassanger + passenger <= this.countSeat)
      return this.countPassanger += passenger
    else return "Забагато пассижирів"
  },
  getMinusPassenger: function (passenger) {
    if (this.countPassanger - passenger > 0)
      return this.countPassanger -= passenger
    else return "Пассажири Закінчились"
  },
}


console.log(`Заправка на вказану кількість літрів: " ${auto.getMoreLiters(6)}"`)
console.log(`Кількість пассажирів ${auto.getPassenger()}`)
console.log(`Додавання пасажирів ${auto.getPlusPassenger(1)}`)
console.log(`Висадка пасажирів ${auto.getMinusPassenger(1)}`)
