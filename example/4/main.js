// // - взять слдующий массив
// // -- отсортировать его по id пользователей
// // -- отсортировать его по id пользователей в обратном опрядке
// // -- отсортировать его по возрасту пользователей
// // -- отсортировать его по возрасту пользователей в обратном порядке
// // -- отсортировать его по имени пользователей
// // -- отсортировать его по имени пользователей в обратном порядке
// // -- отсортировать его по названию улицы  в алфавитном порядке
// // -- отсортировать его по номеру дома по возрастанию
// // -- отфильтровать (оставить) тех кто младше 30
// // -- отфильтровать (оставить) тех у кого отрицательный статус
// // -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// // -- отфильтровать (оставить) тех у кого номер дома четный
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
// ];
//
//
// // let map = usersWithAddress.sort(value => value.id);
// // console.log(map);
//
// // let map1 = usersWithAddress.sort((a, b) => b.id - a.id);
// // console.log(map1);
//
// // console.log(usersWithAddress.sort((a, b) => a.age-b.age));
//
//
// // console.log(usersWithAddress.sort((a, b) => b.age-a.age));
//
// // let sort = usersWithAddress.sort((user1, user2) => {
// // //     if (user1.name > user2.name) {
// // //         return 1
// // //
// // //     }
// // //     if (user1.name < user2.name) {
// // //         return -1;
// // //     }
// // //     if (user1.name === user2.name) {
// // //         return 0;
// // //     }
// // //
// // // });
// // // console.log(sort);
//
//
// // let sort = usersWithAddress.sort((user1, user2) => {
// //     if (user1.address.street > user2.address.street) {
// //         return 1
// //
// //     }
// //     if (user1.address.street < user2.address.street) {
// //         return -1;
// //     }
// //     if (user1.address.street === user2.address.street) {
// //         return 0;
// //     }
// //
// // });
// // console.log(sort);
//
// // console.log(usersWithAddress.sort((user1, user2) => user1.address.number - user2.address.number));
//
// let filter = usersWithAddress.filter(value => value.age < 30);
// console.log(filter);
// let filter1 = usersWithAddress.filter(value => !value.status);
// console.log(filter1);


// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
//
// // let filter1 = cars.filter(value => value.volume >= 3);
// // console.log(filter1)
// // // - двигун = 2л
// // let filter = cars.filter(value => value.volume = 2);
// // console.log(filter);
// // // - виробник мерс
// // let filter2 = cars.filter(value => value.producer === "mercedes");
// // console.log(filter2);
// // // - двигун більше 3х літрів + виробник мерседес
//
// for (let i = 0; i < cars.length; i++) {
//     let user = cars[i];
//     if (user.volume >= 3 && user.producer === "mercedes") {
//         console.log(user);
//     }
// }
//
//
// // - двигун більше 3х літрів + виробник субару
//
//
//


// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


//
//
// const Content = (value, number) => {
//     document.write(`<div><ul>`);
//   for(let i=0;i<number;i++){
//           document.write(`<li>
//               <p> <h2>${value}</h2></p>
//
//           </li>`)
//   }
//
//
//
//
//     document.write(`<div><ul>`);
//
// };
//
// let a = 5;
// let b=10



function User(name,age,status,dogname,rrrr){
    this.name = name;
    this.age = age;
    this.status = status;
    this.dog={name:dogname,ffff:rrrr}
}

let user = new User('232323', 32, true,'yyyy','uuuuuuuuuu');
console.log(user);