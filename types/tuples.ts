const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};
//Type alias Tuples are not really useful
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40];


