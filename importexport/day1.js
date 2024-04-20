


// // destructure of objects and arrey
// //1
// let names = ["aboli", "apeksha", "mrunali", "vrushali"]

// let [A, B, C, D] = names
// console.log(A)
// console.log(B)
// console.log(C)
// console.log(D)


// //2.
// let info = {
//     firstname: "vrushalii",
//     lastname: "patil"
// }

// let { firstname: E, lastname: F } = info
// console.log(E, F)

// // Rest and Spread operator


// // spread operator
// let G = [1, 2, 3]
// let H = [4, 5, 6]

// let I = [...G, ...H]
// console.log(I)          //[ 1, 2, 3, 4, 5, 6 ]


// // sum of two with spread
// let numbers_to_add = [2, 4, 6, 8, 10]
// function numberofsum(...numbers) {
//     return numbers.reduce(function (acc, el) {
//         return acc + el
//     }, 0)
// }
// let X = numberofsum(...numbers_to_add)
// console.log(X)













// //rest operator
// // used to represent an indefinite number of arguments as an array in a function.
// let person = {
//     name: "Aboli",
//     age: 23,
//     city: "Ngp"
// }
// let { name, ...restOfPerson } = person

// console.log(name)            // "Aboli"
// console.log(restOfPerson)    // { age: 23, city: "Ngp" }




// function ADDstring(sperator, ...strings) {
//     return strings.join(sperator)

// }
// let Q = ADDstring(" ", "apple", "is", "in", "red", "color")
// console.log(Q)    //apple is in red color







// // template literal

// name = "vrushali"
// age = 24

// console.log(`hello,  my name is ${name}, and my age is ${age}`)





let students = [

    {
        firstname: "chinmay",
        lastName: "deshpande"
    },
    {
        firstname: "poorva",
        lastName: "vyas"
    }
    ,
    {
        firstname: "shivani",
        lastName: "headua"
    }
]


if (students.firstname == "shivani") {
    students.firstname = "vrushali"
}



























