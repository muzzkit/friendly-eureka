import 'reflect-metadata';

// const plane = {
//     // color: 'red',
//     green: 'lopp'
// }
// Reflect.defineMetadata('note', 'hi there', plane,'green');



// const note = Reflect.getMetadata('note', plane, 'green')

// console.log(note);

@printMetadata
class Plane {
    color: string = 'red';
    
    @markFunction('Hi there')
    fly(): void{
        console.log('vrrrrrr')
    }


}


function markFunction(secretInfo: string){
    return function markFunction (target: Plane, key:string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    }
}


function printMetadata(target: typeof Plane){
    for(let key in target.prototype){
      const secret =  Reflect.getMetadata('secret', target.prototype, key)
    }
}