

// setTimeout(() => {
//     console.log("Helllo")
// }, 2000)

// const names = ['Andre', 'Iggy', 'AAAAA']


// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// const geocode = (address, callback) => {

//     setTimeout( () => {
//         const data = {
//         latitude: 0,
//         longitude:0
//         }
//     callback(data)
//     }
//     , 2000)
// }

// geocode('Philadelphia', (data) => {
//     console.log(data)

// })


const add = (num1,num2, callback) => {
    setTimeout(() => {
        callback(num1 + num2)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
})
