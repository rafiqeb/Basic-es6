//    Problem 1

// const students = [
//     {name: 'rafiq', email: 'rafiq@gmail.com', avg: 55, fiftypersent: true},
//     {name: 'kona', email: 'kona@gmail.com', avg: 50, fiftypersent: true},
//     {name: 'sova', email: 'sova@gmail.com', avg: 45, fiftypersent: false},
// ];

// const findSCIC = (students) => {
//     const scic = students.filter((person) => person.avg > 48 && person.fiftypersent === true)
//     const name = scic.map((p) => p.name)
//     return name
// }
// const result = findSCIC(students)
// console.log(result)

//    Problem 2

// const polapain = [
//     {name: 'abul', job: 'sorkari', salary: 17000},
//     {name: 'babul', job: 'besorkari', salary: 25000},
//     {name: 'kabul', job: 'sorkari', salary: 21000},
//     {name: 'habul', job: 'besorkari', salary: 47000},
//     {name: 'sabul', job: 'sorkari', salary: 23000},
//     {name: 'dabul', job: 'besorkari', salary: 55000},
// ]

// const jamais = polapain.filter((pola) => 
//     (pola.job === 'sorkari' && pola.salary >= 20000) || 
//     (pola.job === 'besorkari' && pola.salary >= 40000))

//     const lottery = Math.floor(Math.round()*jamais.length)
//     console.log(jamais[lottery].name, 'tumi jitso')