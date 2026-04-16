// !Basic Of Objects


// let company = "tcl"
// let key= "salary"

// let obj = {
//     name : "rohit",
//     age : 22,
//     sid : 22,
//     getdetails : function () {
//         console.log(this.name, this.age, this.sid)
//     },
//     company,
//     [key]: 80000 
// }

// console.log(obj)



// ! Spread Operator


// let obj1 = {
//     username : "Sameer",
//     email: "123@gmail.com"
// }
// let obj2 = {
//     ...obj1,
//     // password: "!@3",
//     role: "student"
// }
// console.log(obj2);



// ! Destructing 


// let obj1 = {
//     username : "Sameer",
//     email: "123@gmail.com",
//     password: "!@3",
//     role: "student"
// }

// let {username, email, password, role} = obj1;
// console.log(username, email, password, role);



// ! ASYNC and SYNC


// console.log("lets do some wait");

// setTimeout(function t1() {
//     console.log("waiting for 5 sec");
    
// }, 4000);

// Promise.resolve().then(function t2() {
//     console.log("promise 1");
    
// })

// console.log("hiii");

// setTimeout(function t3() {
//     console.log("waiting for 1 sec");
    
// }, 1000);



// ! MAP AND FOREACH


// let arr=[1,2,3,4,5];

// let arr2 = arr.map((arr)=>arr)
// console.log(arr2);

// let arr3 = arr.forEach((n) => n)
// console.log(arr3);




// How to handle Promis!!


// let p1 = new Promise((res,rej)=>{
//     if(flase){
//         res("hiii")
//     }
//     else{
//         rej("byeee")
//     }
// })
// console.log(p1);

// then() and catch()!!!

// p1.then(()=>{
//     console.log("went smooth");
    
// })
// p1.catch((err)=>{
//     console.log("something went wrong", err)
// })



// ASYNC AWAIT


// function getData(){
//     return new Promise((res,rej)=>{
//         setTimeout(() => {
//             res("hiiii");
            
//         }, 5000);
//     })
// }

// async function displayData(){
//     let data = await getData();
//     console.log(data)
// }

// displayData()
