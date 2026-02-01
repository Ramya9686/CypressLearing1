const P = new Promise( (resolve, reject) => {
let x = 1+4;
if(x === 3){
    resolve("Success: x is 2");
}
else{
    reject("Error: x is not 2");
}
})