// // synchronous 
// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");


// // asynchronous
// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("Hello");
// }, 4000);

// console.log("three");
// console.log("four");
// console.log("five");


// // callback
// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }
// calculator(5, 20, sum);


// // asynchronous callback
// const hello = () => {
//     console.log("hello");
// };
// setTimeout(hello, 5000); 


// // promise

// // function getData(dataId, nextData) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             reject("error");
// //             if (nextData) {
// //                 nextData();
// //             }
// //         }, 5000);
// //     });
// // }

// const getPromise =() => {
//     return new Promise((resolve, reject) => {
//         console.log("I am fulfilled");
//         // resolve("success");
//         reject("error");
//     })
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("Promise fulfilled");
// });

// promise.catch(() => {
//     console.log("rejected");
// });


// // promise chaining
// function asyncFunc1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("Success");
//         }, 3000);
//     });
// }

// function asyncFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("Success");
//         }, 3000);
//     });
// }

// console.log("fetching data1........");
// asyncFunc1()
//       .then((res1) =>{
//         console.log("fetching data2........");
//         return asyncFunc2();
//       })
//       .then((res2) =>{
//         console.log("fetching all data........");
//       })
//       .catch((error) =>{
//         console.log("Error........");
//       });

// // Fetching data1........
// // (Data1 appears after 3 seconds)
// // Fetching data2........
// // (Data2 appears after another 3 seconds)
// // All data fetched.



// async - await 
function api() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("news data");
            resolve(200);
        }, 2000);
    });
}

async function getNewsData(){
    await api();
}
