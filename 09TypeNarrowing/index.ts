
//This is all that you need to know about type narrowing lol
function detectType(val: number | string): number | string{
    
    if(typeof val === "string"){
        return val.toLowerCase();
    }

    return val + 3;
}


//instanceof is used when the value is constructed with new keyword

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else {
        console.log(x.toUpperCase());
    }
}



// const d = new Date();
const d = "hello"
logValue(d);


//Another typeNarrowing is using 'as' keyword

type Fish = {
    swim: () => void
}

type Bird = {
    fly: () => void
}

function isFish(pet: Fish | Bird): pet is Fish{ //pet is Fish means if the func returns true then it's fish otherwise it's bird
    return (pet as Fish).swim() !== undefined; //means consider pet as fish and check if there's a method swim
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food";
    }else {
        pet
        return "bird food";
    }
}


//Discriminated Unions -> to define a common field in different interfaces so that you can differentiate between them
interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }else if(shape.kind === "square"){
        return shape.side * shape.side;
    }else{
        return shape.length * shape.width;
    }
}

//doing the same using switch statements
function getShape(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        }

        const _exhaustiveCheck: never = shape; //this is to make sure that all the cases are covered
        return _exhaustiveCheck;
}



export {}