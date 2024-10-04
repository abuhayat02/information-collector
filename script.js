let loadData = new Promise ((resolve , reject) => {
    let numbers = Math.round(Math.random()*10);
    if(numbers > 0 && numbers <= 6){
        resolve('resolve number = ' + numbers);
    }
    else{
        reject('reject numbers '+ numbers);
    }
})

loadData
.then(getData => console.log(getData))
.catch((error) => console.log(error))


