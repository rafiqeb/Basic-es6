//    **********  Scope 3 dhoroner  ********

//    1. global scope   *** je kono jaiga theke console.log kora jai
// const x = 5;
// console.log(x)
// if(true){
//     console.log(x)
// }
// function show(){
//     console.log(x)
// }
// show()

//     2. block scope  *** blocker baire theke consol kora jaina
// {
//     let x = 5;
//     console.log(x)
// }

//  3.  functional scope  *** functional scope var kaj korena and ofcours call korte hobe baire console kora jaina
// function show(){
//     const x = 5;
//     console.log(x)
// }
// show()
// console.log(x)

//      ************  Arrow function   ***********

//   normal function
// function info(){
//     return 'I Love You'
// }

//    arrow function *** 1 line likhle return kora lage na
// const info = () => 'I Love You';
// const result = info()
// console.log(result)

// const double = (x) => x * 2;  // 1 ta pera miter thakle bracket lagena
// console.log(double(5))

// const add = (x=0, y=0) => {  // peramiter er defoult value dewa jai
//     return x + y;
// }
// console.log(add(10))

//      **************  Logical operator   *******
//   && operatore left side true hole right side dekhabe and left side false hole right dekhabe na

//    ********* Tarnary operator   ********  eta amra use korbo beshi
// const x = 5;
// console.log(x === 5 ? 'number is five' : 'number is not five')

//    *********  Array spread distructure **************

// const arr1 = [1, 2, 3]
// const arr2 = arr1;  // eivabe na kore spreading kore shohoje kora jai
// arr1.push(50)
// arr2.push(60)
// console.log(arr2)

// const arr1 = [1, 2, 3]
// const arr2 = [...arr1];  // spread kore shohoje new array banano jai
// arr1.push(50)
// arr2.push(60)
// console.log(arr1)
// console.log(arr2)

//    Array index
// const name = ['abul', 'habul', 'kabul']

// const num1 = name[0]
// const num2 = name[1]
// const num3 = name[2]   // eivabe na kore distructure korbo
// console.log(num1)
// console.log(num2)
// console.log(num3)

//   Array distructure
// const name = ['abul', 'habul', 'kabul']
// const [, , z] = name;    // eivabe distructure korbo 1 ta value pawer jonno
// console.log(z)
// console.log(x,y,z)

//      ********  Object spreading and distructure ********
// const info = {
//     name: 'Rafiq',
//     wife: 'kona',
//     contact:{
//         phone: '01729665802',
//         email: 'rafiq@gmail.com'
//     }
// }
// const obj2 = {...info};

// // const {name} = info
// const {name:myName} = info
// // console.log(myName)
// const {contact:{email}} = info
// // const {email} = contact

// console.log(email)

// // obj2.name = 'rubel'
// // console.log(info)
// console.log(obj2)

//       **********  Map  /   foretch / find  / filter *********

//    foretch shob element nibe but return korbe na
// const arr = [10, 15, 20, 25, 30]

// let sum = 0;
// arr.forEach((a) => {
//     sum = sum + a;
// })
// console.log(sum)

//      map shob element nibe and return o korbe
// const arr = [10, 15, 20, 25, 30]
// const result = arr.map((a) => a*2)
// console.log(result)

//     find shob element theke shorto anujai prothomta dibe
// const numbers = [10, 15, 20, 25, 30]
// const result = numbers.find((item) => item > 10 && item %2 == 0)
// console.log(result)

//     filter shob element theke shorto anujai shobgulo dibe
// const numbers = [10, 15, 20, 25, 30]
// const result = numbers.filter((item) => item > 15)
// console.log(result)

//       Reduce 
// const numbers = [5, 2, 1, 3, 10]
// const result = numbers.reduce((pre, curr) => pre + curr, 0)
// console.log(result)
// const result = numbers.reduce((pre, curr) => pre * curr, 1)
// console.log(result)

//     *********  Template string  ********

// const name = 'Rafiq';
// const age = 30;
// const job = 'beker'
// const sentence = `amar nam ${name}. amar boyosh ${age}. ami ekhon ${job}`
// console.log(sentence)