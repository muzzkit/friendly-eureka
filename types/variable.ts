let apple: number =5; ///type annotation we declare the type 
let apples = 90 //type interference: will guess for us on same line
let speed: string = 'fast';
let hasName: boolean = true;
let now: Date = new Date()

let colors: string[] =['red', 'green', 'blue'];
let check: boolean[] =[true, false];


let point: {x: number; y:number} = {
    x: 09,
    y: 20
}
const logNumber = (i:number) => {
    console.log(i)
}


// when to use anointement 
const json = '{"x": 20, "o": 20}';
const coordinates: {x: number, y:number} = JSON.parse(json);

console.log(coordinates)


 //when we declare a variable on one line and initialize later

let words = ['red', 'green', 'blue']
let foundWords = true;

for (let i = 0; i < words.length; i++) {
    if(words[i] === 'green'){
        foundWords =true
    }
}

//variable whose type cannot be inferred correctly
let numbers = [-19, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
      numberAboveZero = numbers[i];
    }
}

