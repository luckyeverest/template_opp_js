//статические методы - которые можно вызвать без инстанса класса(создание нового экземпляра)


class User {

    constructor(name) {
        this.name = name
    }
    static GetRole(email) {//статические методы записыватся начиная с слова static
        //реализация кода c email
        return "пользователь студент"
    }
}

const person = new User('dimka')// в экземпляре класса нельзя использовать статические методы
console.log(person)

console.log(User.GetRole())//обращение к статическому методу