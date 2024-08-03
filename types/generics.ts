class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr = new ArrayOfAnything([1, 1, 1, 11]);

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(["a", "b", "c"]);

//Generic Constraints
class Cars {
  print() {
    console.log("I am a car");
  }
}

class House {
  print() {
    console.log("I am a house");
  }
}

interface IPrintable {
  print(): void;
}

function printHouseOrCars<T extends IPrintable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Cars>([new Cars(), new Cars()]);
