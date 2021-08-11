// явное указание контекста
const btn = document.querySelector('.btn')

//btn.onclick = test// this указывает на кнопку

function test(color, num) {
    console.log(this)
    this.style.background = color
}

//test()// функция не вызовется т.к. this указыет на window

//function.call (context,...,...) первым аргументом контекст потом все остальные аргументы 
//работает только с теми аргументами что есть изначально
test.call(btn, 'green') // выводит <button class="btn" style="background: red;"></button>   this =btn

btn.onclick = function () {
    test.apply(btn, ['red', 4])// когда надо передать неопределеное количество параметров apply вместо call
}

//bind позволяет создавать функции с указаным контекстом

function test2(color, num) {
    console.log(this)
    this.style.background = color
}
