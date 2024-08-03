import { NumbersCollection } from "./NumbersCollection";

// export class Sorter {
//Impletation 1
//     /*like this pattern*/
//     // collection: number[];
//     // constructor(collection: number[]){
//     //     this.collection = collection;
//     // }

//     //or this pattern

//     constructor(public collection: number[] | string){}

//     sort(): void{
//         //only for a number
//         const { length } = this.collection;

//         for(let i =0; i < length; i++){
//             for(let j = 0; j < length-i-1; j++) {
//                 if(this.collection instanceof Array){
//                     this.collection
//                 if (this.collection[j] > this.collection[j+1]){
//                     const leftHand = this.collection[j];
//                     console.log(leftHand)
//                     this.collection[j] = this.collection[j+1];
//                     console.log(this.collection[j]+'helo')
//                     this.collection[j+1] = leftHand;
//                     console.log(leftHand+'hey')
//                 }
//             }
//         }
//     }
// }

//         sortAlphabet(): void{
//             //if the collection is a string
//             const { length } = this.collection;

//             for(let i =0; i < length; i++){
//                 for(let j = 0; j < length-i-1; j++) {
//                     if(this.collection instanceof String){
//                         this.collection
//                     if (this.collection[j] > this.collection[j+1]){
//                         const leftHand = this.collection[j];
//                         console.log(leftHand)
//                         this.collection[j] = this.collection[j+1];
//                         console.log(this.collection[j]+'helo')
//                         this.collection[j+1] = leftHand;
//                         console.log(leftHand+'hey')
//                     }
//                 }
//             }

//         }
//     }

// }

// const sorter = new Sorter([10, 3, -5, 0] | 'hey')

// sorter.sort();
// // sorter.sortAlphabet();

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  /*like this pattern*/
  // collection: number[];
  // constructor(collection: number[]){
  //     this.collection = collection;
  // }

  //or this pattern

  constructor() {}

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
