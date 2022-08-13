
let age = prompt("Ваш возраст",18)
let mess = (age > 18) ? () => true : alert("Родители разрешили?")
mess()


let a = 4
let b = 1
let result = (a + b < 4) ? () => alert('Мало') : alert('Много')
result()


let login = prompt('Должность в организации?')
let message = (login === 'Сотрудник') ? () =>alert('Привет') : (login === 'Директор') ? () => alert('Здравствуйте') : (login === '') ? () => alert('Нет логина') : alert('')
message()


let a = 1;
if (a > 0) {
    let ggg = function() {
        console.log('один !')
    }
} else {
    let ggg = function() {
        console.log('два !');
    }
}

let elements = ['Hydrogen','Helium','Lithium','Beryllium'];
console.log(elements.map(function (element) {return element.length}));


let elements = ['Hydrogen','Helium','Lithium','Beryllium'];
console.log(elements.map((element) => element.length))