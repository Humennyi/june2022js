let str = 'hello okten';
// console.log(str[0]);
// console.log(str.length);
// for (const strElement of str) {
//     console.log(strElement);
// }

// let concat = str.concat('!!!');
// console.log(concat);
// let toUpperCase = str.toUpperCase();
// console.log(toUpperCase);
// console.log(toUpperCase.toLowerCase());

// console.log(str.startsWith("llo",2));
// console.log(str.endsWith("ena"));

// console.log(str.substring(2, 7));
// console.log(str.indexOf('o',5));
// console.log(str.lastIndexOf('o'));

// let userInfo = 'vasya-31';
// let indexOfTyre = userInfo.indexOf('-');
// console.log(indexOfTyre);
// let name = userInfo.substring(0, indexOfTyre);
// console.log(name);
// let age = userInfo.substring(indexOfTyre + 1, userInfo.length);
// console.log(age);


// console.log(str.charAt(7));
// console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', '!'));


// let userInfo2 = 'petya-33-186-';
// let split = userInfo2.split('-');
// console.log(split);


// let userInfo2 = 'petya-33:186';
// let split = userInfo2.split(/[-:]/);
// console.log(split);


// let arr = [];
// // console.log(typeof arr, Array.isArray(arr)); // object
//
// // arr[arr.length] = 'msg';
// // console.log(arr);
// // arr[arr.length] = 'msg2';
// // console.log(arr);
//
// arr.push('asd');
// console.log(arr);
// arr.push('qwe');
// console.log(arr);
//
// // let pop = arr.pop();
// // console.log(arr);
// // console.log(pop)
//
// arr.unshift('poipoi');
// console.log(arr);
// let shift = arr.shift();
// console.log(arr);


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// //// let splice = users.splice(1, 0,'asdasddsa');
// // let splice = users.splice(Math.round(users.length/2), 0,'asdasddsa');
// // console.log(splice);
// // console.log(users);
//
// // let slice = users.slice(0, 2);
// // console.log(slice);
//
// // let concat = users.concat(1, 2, 3);
// // let concat = users.concat([1, 2, 3]);
// // console.log(concat);

// console.log(str.includes('llo'));

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
//
// // users.forEach((user) => {
// //     if (!user.status) {
// //         console.log(user);
// //     }
// // });
// // users.forEach(value => console.log(value));
// // let filter = users.filter(value => value.status);
// // let filter = users.filter(value => value.age > 30);
// // console.log(filter);
// // let filter = [];
// // for (const user of users) {
// //     if (user.status) {
// //         filter.push(user);
// //     }
// // }
//
// // let map = users.map(user => ({name: user.name, age: user.age}));
// // let map = users.map((user, index) => {
// //     return {
// //         name: user.name,
// //         age: user.age,
// //         status: user.status,
// //         id: index + 1
// //     };
// // });
//
//
// // let map = users.map((user, index) => ({name: user.name, age: user.age, status: user.status, id: index + 1}));
//
// //spred operator ...user
// // let map = users.map((user, index) => ({...user,id: index + 1}));
// // console.log(map);
//
// // let find = users.find(value => value.name === 'max');
// // console.log(find);
//
// // users.sort((user1, user2) => user1.age - user2.age);
// // let sort = users.sort((user1, user2) => {
// //     if (user1.name > user2.name) {
// //         return 1;
// //     }
// //     if (user1.name < user2.name) {
// //         return -1;
// //     }
// //     if (user1.name === user2.name) {
// //         return 0;
// //     }
// //
// // });
// // console.log(sort);
//
//
// // console.log(users.sort((a, b) => a.name.length - b.name.length));


// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];// ----> {trueStatus : [...], falseStatus : [...]}
//
// let reduce = users.reduce(function (accumulator, user) {
//
//     if (user.status) {
//         accumulator.statusTrue.push(user);
//     } else {
//         accumulator.statusFalse.push(user);
//     }
//
//     return accumulator;
//
// }, {statusTrue: [], statusFalse: []});
// console.log(reduce);
//















































