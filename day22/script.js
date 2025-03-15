// // to find error use "use strict"
// 'use strict'

// let driverLicence=false
// const passtest= true
// if(passtest){
//     driverLicence=true
// }
// if(passtest){
//     console.log("can be run");
// }

// switch statement----key and vlaue ma kam garxa

// const day = prompt("select the day")
// switch (day) {
//     case "sunday":
//         console.log("ghumna jane bida vayar");
//         break;
//     case "monday":
//         console.log("kamma janey");
//         break;
//     case "tuesday":
//         console.log("karey kham");
//         break;
//     case "wednesday":
//         console.log("foosal jam");
//         break;
//     case "thrusday":
//         console.log("daru kham");
//         break;
//     case "friday":
//         console.log("good friday manam");
//         break;
//     case "saturday":
//         console.log("goood sleep");
//         break;
//     default:
//         console.log("kehi pani nagarne");
//         break;
// }

//  brower ko massage ma show garda

const day = prompt("select the day")
let message=''
switch (day) {
    case "sunday":
        message="ghumna jane bida vayar";
        break;
    case "monday":
        message=("kamma janey");
        break;
    case "tuesday":
        message=("karey kham");
        break;
    case "wednesday":
        message=("foosal jam");
        break;
    case "thrusday":
        message=("daru kham");
        break;
    case "friday":
        message=("good friday manam");
        break;
    case "saturday":
        message=("goood sleep");
        break;
    default:
        console.log("kehi pani nagarne");
        break;
}
// alert(message);
//  let htmlday=document.getElementById('day')
//  htmlday.innerText=message

let htmlday=document.getElementById('day')
 htmlday.innerText=message


//  function banaune tarika
function printaman(){
    console.log="a"
    console.log="m"
    console.log="a"
    console.log="n"
}
printaman();