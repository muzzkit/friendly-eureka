interface Reportable {
    summary(): string;
  
}
const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

//long type annotation
const printVehicle = (vehicle: {name: string; year:number; broken: boolean }): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldCivic)

const drcink= {
 sugar: 40,
 summary() {
    return `My drink has ${this.sugar} grams of sugar`
 }
}

const newCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string {
        return `Name ${this.name}`
    }
}

const printVehicle1 = ({summary}: Reportable): void => {
    console.log(`Name: ${summary()}`)
}



printVehicle1(newCivic)
printVehicle1(drcink)
