class Vehicle {
    constructor(color: string){ }
    
    drive(): void {
        console.log('chugga chugga');
    }

    honk(): void {
        console.log(this.drive, 'beep');
    }
}


class Car extends Vehicle {  
    constructor(public color: string){
        super('red')
    }
    wheel(): void {
        console.log('beep')
    }
}

const lop = new Car('red');
console.log(lop.wheel())


class Vehicles {
    protected drive(): void {
        console.log('chugga chugga');
    }

   public honk(): void {
        console.log('beep');
    }
}


class Caruy extends Vehicles {
    protected drive(): void {
    console.log('vroom')
   }

   public hyuye(): void{
    console.log(this.honk())
   }

   
}

 const hey = new Caruy()
 hey.honk()



