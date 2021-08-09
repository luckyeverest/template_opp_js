
// для удобства нужно разделить на модули файл User.js------------------------------------------------
//подключается перед основным скриптом где будет использоватся этот класс
class User {//создание абстракции,модели ...
    constructor(username, password) {//запускается когда мы создаем объект на основе User
        this.username = username
        this.password = password
    }
    validatePassword() {
        console.log('validatePassword work')
        if (this.password.length > 6) {
            return true
        }
        return false
    }
}
//-----------------------------------------------------------------------------------------------------------

//наследование на основе class User,создаем class Student,тоже выноси в отдельный файл-------------------------
//также нужно выностить в модулm,после User но перед скриптом где используется
class Student extends User {
    constructor(username, password, nickname) {
        super(username, password)//параметры для обекта User обязательны
        this.nickname = nickname
    }
    validatePassword() {
        super.validatePassword()   //обращение к радительскому свойству
        if (this.password.length > 10) {//перезаписываение метода для  Student
            return true
        }
        return false
    }
}

//-------------------------------------------------------------------------------------------------------------
//тело script.js----------------------------------------------------------------------------------
//пример(данные пришли с form)
const nameA = 'dmitryy'
const passwordA = 'asd6'
const nickname = 'StrongDmitryy'
const nameB = 'mitya'
const passwordB = 'jkl7777'

//создание объекта person на основе User
const person = new User(nameA, passwordA)
console.log(person)// получение объекта person
console.log(person.username)//получение свойства username
console.log(person.validatePassword())// вызываем общий метод наследованый от class User

//создание объекта person2 на основе User
const person2 = new User(nameB, passwordB)
console.log(person2)// получение объекта person
console.log(person2.username)//получение свойства username
console.log(person2.validatePassword())// вызываем общий метод наследованый от class User

const firstStudent = new Student(nameA, passwordA, nickname)
console.log(firstStudent)
console.log(nickname)
console.log(firstStudent.validatePassword())
//------------------------------------------------------------------------------------------------