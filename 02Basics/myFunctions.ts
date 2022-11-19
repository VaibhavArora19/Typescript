function addTwo(num: number){
    return num + 2;
}

function toUpper(val: string){
    return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean = false){}

function howToReturn(num: number): number{
    return num + 2;
}

// function getValue(myVal: number): boolean | string{
//     if(myVal > 5){
//         return true;
//     }
//     else{
//         return "200 OK";
//     }
// }

// TS with aero => functions
const getHello = (s: string): string => {return "Hello nigga"};

const heroes = ["thor", "batman", "ironman", "hulk"];

heroes.map((hero): string => {
    // return 1 will throw error because return type is string
    return `Hero is ${hero}`
})

//In case of handling errors
//Never is used when a function "never" returns a value -> mostly used in error handling
//Refer docs to know more about never
function handleError(errMsg: string): never{
    throw new Error(errMsg)
}

addTwo(5);
toUpper('hello');
signUp("Vaibhav", "nice@gmail.com", false);
signUp("Itachi", "Itachi@yahoo.org");
let message = howToReturn(10);

export {};