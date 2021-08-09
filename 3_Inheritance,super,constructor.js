class User {
    constructor(nameS) {
        this.name = nameS
    }
    sayHello() {
        console.log(this.nameS + " " + 'you super')
        return this.name // функция должна что то возвращать 
    }
}

let userDima = new User('Dmitryy')
console.log(userDima)
console.log(userDima.name)

class Person extends User {
    constructor(nameS, email) {
        super(nameS)
        //super() надо вызывать всегда, даже если нет параметров 
        //super при вызове конструктора ,вызывает конструктор родителя и записывет в текущий объект(this) все что от него требуется
        this.nameS = nameS
        this.email = email
    }
    sayHello2() {
        console.log(super.sayHello())// тоже самое что this.sayHello() для обращения в конструктор родителя
        console.log(this.email) // super при оспользование в методе обращается к родительскому class и дает доступ до 
        // родительских методов
    }
}

const personLog = new Person('dimka', 'email@email')
console.log(personLog)
console.log(personLog.sayHello())
