console.log(this)//хранит объект window

document.querySelector(".btn").onclick = function () {
    console.log(this)//выводит <button class="btn"></button> 
    this.style.background = 'black'
}

document.querySelector(".btn").onclick = () => {
    console.log(".onclick = () =>" + this)// стрелочная функция указывать на window а не на объект

    //this.style.background = 'black'//не работает через стрелочную функцию, this не сохроняет контекст
}

class airPlane {
    constructor(airPlane) {
        this.airPlane = airPlane //в классе this указывает на создаваемый объект т.е. на bort
    }
    showFunction() {
        console.log(this)// в классе this указывает на сам объект
    }
}

let bort = new airPlane('777')// создание объекта
console.log(bort)
bort.showFunction()// в каждом случает this указывает на свой объект

let bort2 = new airPlane('747')// создание второго объекта
console.log(bort2)
bort2.showFunction()// в каждом случает this указывает на свой объект

class Copter extends airPlane {
    constructor(airPlane, vint) {
        super(airPlane)
        this.vint = vint // this указывает на текущий объект (akula) 
    }
}

let akula = new Copter('77-21', 'top')
console.log(akula)