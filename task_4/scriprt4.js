//================================= Задача 4 ====================================
// Задача 4. Розробити клас Baner
// ===================
// Поля
// Масив об’єктів ( графічних зображень та посилань на сайти)
// ===================
// методи
// Метод випадкового вибору об’єкта (графічного зображення та посилання)
// Метод виведення випадкового банера

class Baner {
	constructor(baners){
		this.baners = baners
	}
	getRandomElement(){
		return this.baners[Math.floor(Math.random() * this.baners.length)]
	}
	getShowRandomBaner(){
		const showBaner = this.getRandomElement()
		document.write(`<a href="${showBaner.link}"><img width=250 src="${showBaner.src}"></a>`)
	}
}

let arrImagesAndLinks = [
  {
    link: "https://ford.ua/",
    src: "https://ford.ua/ford_og.png",
  },
  {
    link: "https://developer.mozilla.org/ru/",
    src: "https://static.vecteezy.com/system/resources/previews/009/028/935/original/mdn-logo-mdn-letter-mdn-letter-logo-design-initials-mdn-logo-linked-with-circle-and-uppercase-monogram-logo-mdn-typography-for-technology-business-and-real-estate-brand-vector.jpg",
  },
  {
    link: "https://www.ukr.net/",
    src: "https://img3.akspic.ru/previews/7/4/2/8/6/168247/168247-kosti_3d-igra_v_kosti_3d-azartnaya_igra-pitevaya_igra-kazino-500x.jpg",
  },
]

let baner = new Baner(arrImagesAndLinks)
baner.getShowRandomBaner()