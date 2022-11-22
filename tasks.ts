// type Fruit = {
//     name: string,
//     price: number,
//     count: number
// }
// function calc(fruit: Fruit) {
//     console.log(
//         fruit.name + "$" + fruit.price +
//         " = " + (fruit.price * fruit.count)
//     );
// }
// const apple: Fruit = {
//     name: "Apple",
//     price: 15,
//     count: 10
// }
// calc(apple)



//task 1

// type Person = {
//     name: string,
//     lastname: string,
//     age: number
// }

// function object(person: Person) {
//     console.log(person.name + " " + person.lastname + " " + person.age + ' years old ');
// }
//  const firdavs: Person = {
//     name: "Firdavs",
//     lastname: "Rahmonaliyev",
//     age: 15
//  }
//  object(firdavs)



//task 2
 
// type App = {
//     appname: string,
//     downloads: number,
//     price: number,
//     package: string
// }

// function object(app: App) {
//     console.log(app.appname + '-' + app.price + `\n` + app.package + `\n` + app.downloads + '%');   
// }

// const file: App = {
//     appname: 'File',
//     downloads: 23,
//     price: 7,
//     package: 'two'
// }

// object(file)



//task 3

type Amounts = {
    phones: number,
    computers: number,
    monitors: number
}

function work3(persentage: number, amounts: Amounts) {
    console.log("phones: " +  amounts.phones * persentage + `\n` +  "computers: " + amounts.computers * persentage  + `\n` + "monitors: " + amounts.monitors * persentage + " ");
}

const file3: Amounts = {
    phones: 5,
    computers: 2,
    monitors: 7
}

work3(3, file3)