// const a = 1;
// const b = 4;
// const c = 3;

// const discriminant = (b**2 - (4*a*c)) 
// console.log( discriminant)
 
// if(discriminant > 0 ){
//     console.log('d > 0')
// }
// else if(discriminant < 0){
//     console.log('d < 0')
// }
// else {
//     console.log( 'd = 0')
// }


let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for( let i = 0; i<=numbers.length; i++){
    
    if(i % 2 == 0 )
    console.log( numbers[i])

}


let odd = []
let even = []


for( let i = 0; i<=numbers.length; i++ ){
    if(i % 2 == 0){
        odd.push(numbers[i])
    }
    else{even.push(numbers[i])}
}
console.log(odd,even)

let sum = 0;
let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i=0; i<array.length; i++){
    sum += array[i]
    console.log(sum/array.length)
}
