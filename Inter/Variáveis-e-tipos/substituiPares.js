function substituirPares(array) {

     for (let i = 0; i < array.length; i++) {
         if (array[i] === 0) {
             console.log("Você já é zero!")
         } else if (array[i] % 2 === 0 ) {
             console.log(`Substituindo ${array[i]} por 0...`);
             array[i] = 0;
         } 
         
     }
     return array;
  }

let arrayRandom = [];

while (arrayRandom.length < 10) {
     let random = Math.floor(Math.random() * 20);

    if (arrayRandom.indexOf(random) == -1) {
        arrayRandom.push(random);
    }
}
    


console.log(substituirPares(arrayRandom));