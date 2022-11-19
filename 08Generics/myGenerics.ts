const score: Array<number> = [];
const name: Array<string> = [];


//Suppose we want that if val is number it should return number and if val is bool it should return bool
//But it's not what we will always achieve in this case
function identityOne(val: number | boolean): number | boolean{
    return val;
}

//less used
function identityThree<Type>(val:Type):Type{
    return val;
}


//more used
function identityFour<T>(val: T): T{
    return val;
}

interface Bottle{
    name: string,
    type: number,
}


const newBottle: Bottle = {
    name: "Alchemy",
    type:1
};


function getSearchProducts<T>(products: T[]): T{
    //Do some database values
    let myIndex = 3;
    return products[myIndex];
}

//Generics with arrow functions
const getSearchProductsArrow = <T>(products: T[]): T => {
    return products[3];
}

//Generic classes
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}


class Sellable<T>{
    
}

identityThree<number>(3);
identityFour<Bottle>(newBottle);

export {};