// 1 Task

// const arr = [
//     {
//         id:1,
//         name:"Botir",
//         age:20,
//         hobby:"Football"
//     },
//     {
//         id:2,
//         name:"Anvar",
//         age:22,
//         hobby:"Basketball"
//     },
//     {
//         id:3,
//         name:"Shohruh",
//         age:20,
//         hobby:"Basketball"
//     },
//     {
//         id:4,
//         name:"Akram",
//         age:22,
//         hobby:"Football"
//     }
// ]


// let arrInform = []

// function  collectNames(arr){
//     for(let num of arr){
//         if( num.age > 20){
//             arrInform.push(num.name)
//         }
//     }
// }
// collectNames(arr)
// console.log(arrInform);




// 3 Task

// let arr = [22,112,3,4,222,123,43]

// function maxFnc(arr){
//     let arrMAx = arr[0]
//     for(let nummax of arr){
//         if (nummax >= arrMAx){
//             arrMAx = nummax
//         }
        
//     }
//     arr.unshift(arrMAx)
//     return  arr
    
// }

// let res = maxFnc(arr)
// console.log(res);



// 4 Task 

// let arrSize = prompt("Arrayni sizeni kiriting") - 0;
// let arr = [];

// function collectNames(arr){
//     for(let i = 0; i < arrSize; i++){
//         let enterName = prompt(`${i+1} - Ism kiriting`)
//         arr.push(enterName) 
//     }
//     return arr
// }
// collectNames(arr)

// let enterName = prompt("Ismingizni kiriting !")

// function findNamefnc(arr){
//     let found = false
//     for(let findname of arr){
//         if(findname == enterName){
//             found = true
//         }
//     }
//     arr.push(enterName)
//     return found ? ("Bunday ism bor: " + enterName) : arr
// }
// let res = findNamefnc(arr)

// console.log(res);



// 5 Task 

// function arrFnc(sum) {
//     let arr = [];
//     for (let i = 1; i <= sum; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }
  
//   function reverseArray(arr) {
//     let reversedArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//       reversedArr.push(arr[i]);
//     }
//     return reversedArr;
//   }
  
//   let sum = parseInt(prompt("Son kiriting:"));
//   let basicArr = arrFnc(sum);
//   let rsvArr = reverseArray(basicArr);
  
//   console.log("Siz kiritgan songacha bolgan sonlar: ", basicArr);
//   console.log("Teskari tartibda: ", rsvArr);


// 2 rasmdagi misollar

// 1 Task

// function plusNumber(num, num2){
//     let total = num + num2
//     return total
// }

// let num = prompt("1 - Son kiriting") - 0;
// let num2 = prompt("2 - Son kiriting") - 0;
// let res = plusNumber(num, num2)
// console.log("Natija: ", res);


// 2 Task
// let arr = [3,5,8,24,56,7,];

// function arrFnc(arr){
//     let total = 0
    
//     for(let i = 0; i < arr.length; i++){
//         total += arr[i]
//     }
//     return total
// }

// let res = arrFnc(arr)
// console.log("Umumiy son: ", res);


// 3 Task
// let arr = [-5, 20, -50, -15, 30, 10];

// function arrFnc(arr){
//     musbatArr = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 0){
//             musbatArr.push(arr[i])
//         }
//     }
//     return musbatArr
// }

// let res = arrFnc(arr)
// console.log("Musbat sonlar: ", res);

// 4 Task


// function arrFnc(arr){
   
//     for(let i = 0; i < arr.length; i++){
//         if( typeof arr[i] === "string" && arr[i] > !isNaN(arr[i])){
//             arr[i] = Number(arr[i])
//         }
//         else if(typeof arr[i] == "string"){
//             arr[i] = 0
//         }
//     }
//     return arr
// }

//  let arr = ["5", 2, "true"]
// let res = arrFnc(arr)
// console.log(res);


// 5 Task

// const arr = [
//     {
//         name:" Abdulloh,",
//         age: 19,
//         status:false
//     },
//     {
//         name:" Ibrohim,",
//         age: 20,
//         status:true
//     },
//     {
//         name:" Shodiyor,",
//         age: 19,
//         status:false
//     },
//     {
//         name:" Oyatillo,",
//         age: 18,
//         status:true
//     },
//     {
//         name:" Shahboz",
//         age: 23,
//         status:false
//     }

// ]


// function collectNames(arr){
//     let flsnames = []
//     for(let value of arr){
        
//         if(value.status == false){
//             flsnames += value.name
//         }
        
//     }
//     return flsnames
// }
// let res = collectNames(arr)

// console.log("Qiymati false teng bolganlar: ", res);

// 6 Task

// function getNumbersFromUser() {
//     let numbers = [];
//     for (let i = 0; i < 3; i++) {
//         let input = prompt("Iltimos, bir son kiriting:") - 0;
//         numbers.push(number); 
//     }
//     return numbers; 
// }

// function calculateAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]; 
//     }
//     return sum / arr.length; 
// }

// let numbers = getNumbersFromUser();

// let average = calculateAverage(numbers);
// console.log("O'rtacha arifmetik qiymati:", average);


// 7 Task


// let arr = [7, 9,77,82,]
// function findArr(arr){
    
//     if(arr[0] % 2 == 0){
//         arr[0]++
//     }
//     else[
//         arr[0]++
//     ]
//     return arr
// }

// let res = findArr(arr)
// console.log("Juft yoki toq boldi: ", res);

// 8 Task

// let arr = ["Salom", "undefined", "true", "Yahshimisiz", "false",]
// let arr2 = ["Salom", "false", "yahshi", "Nan",  "undefined"]

// function similarArr(arr,arr2){
//     let similar = []
//     for(let value of arr){
//         for(let scvalue of arr2){
//             if(value == scvalue){
//                 similar.push(value)
//                 found = true;
//             }
//         }
//     }
//     return similar
// }

// let res = similarArr(arr,arr2)
// console.log(res);


// qoshimcha

//  let arr = [];
// let yigindi = 0
// function findmsbNumbers() {
   
     
//     for (let i = 0; i < 5; i++) {
//         let input = prompt("son kiriting:") - 0;
        
//         if (input > 0) {
//             arr.push(input);
//         } 
//     }
//     return arr
    
// }



// // shu larning yigindisi
// function totalFnc(arr){
//     for(let i = 0; i < arr.length; i++){
//         yigindi += arr[i]
//     }
//     return yigindi
// }

// let resArr = findmsbNumbers();
// let res = totalFnc(arr)
// console.log("Musbat sonlarning yigindisi: ", res);