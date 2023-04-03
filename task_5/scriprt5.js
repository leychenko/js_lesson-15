//================================= Задача 5 ====================================
// Задача 5. Розробити клас «Керівник танців»
// ==============
// Поля
// Масив імен хлопців
// Масив імен дівчат

// =============
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців

class DanceLeader {
  constructor(namesBoysList, namesGirlsList) {
    this.namesBoysList = namesBoysList
    this.namesGirlsList = namesGirlsList
  }
  getRandomNamesBoys() {
    const randomIndex = Math.floor(Math.random() * this.namesBoysList.length)
    return this.namesBoysList[randomIndex]
  }
  getRandomNamesGirls() {
    const randomIndex = Math.floor(Math.random() * this.namesGirlsList.length)
    return this.namesGirlsList[randomIndex]
  }
  getCoupleForDance() {
    let boys = this.getRandomNamesBoys()
    let girls = this.getRandomNamesGirls()
   return `<p>${boys} - ${girls}</p><br>`
  }
  run() {
    let showCouple = this.getCoupleForDance.bind(this)
	 setInterval(()=>{
		document.write(`<p>${showCouple()}</p>`)
	 },5000)
	}
}


let arrNamesBoys = ["Ivan", "Koly", "Dmitriy", "Denis", "Maksim", "Igor"]
let arrNamesGirls = ["Olga", "Ina", "Katy", "Tany", "Alina", "Sveta"]

let dance = new DanceLeader(arrNamesBoys,arrNamesGirls)
dance.run()

