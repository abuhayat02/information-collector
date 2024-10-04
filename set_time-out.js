
let number = 0

let cleck = setInterval(()=>{
    number++
    if(number > 10){
        clearInterval(cleckJ)
    }
    console.log(number)
} , 2000)