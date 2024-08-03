@classDecorator
class Boat {
    @testDecorator
color: string = 'red';

    get formattedColor(): string{
        return `Thi sbotas color is ${this.color}`
    }

    @logError('Oops, boat was suk')

  pilot(@parameterDecorator speed: string, @parameterDecorator generateWake: boolean): void{
          
            if(speed === 'fast'){
                console.log('swish');
            }else{
                console.log('nothing')
            }
        }
    }

    function classDecorator(contrusctor: typeof Boat){
        console.log(contrusctor)
    }
 function parameterDecorator(target: any, key: string, index: number){
    console.log(index, key)
 }
function testDecorator(target: any, key: string){
    console.log(target)
    console.log(key)
}

function logError(erroMessage:string){
   return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function (){
            try{
                method();
            } catch (e){
                console.log(erroMessage); 
            }
        }
    }
}


new Boat().pilot('lll', true)