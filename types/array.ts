
const carMakers: string[] = ['ford', 'toyota', 'chevy', ];

const dates = [new Date(), new Date()]
const carsByMake: string[][] = [];

 carsByMake.push([
    'f150',
    'Juis',
    'uiuiuerd'
])

///Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent imcompatible values

carMakers.push('100');

///Help with Map

carMakers.map((car: string): string => {
    return car.toUpperCase()
});


///flexible types
const importantDates: (Date | string)[] = [];
