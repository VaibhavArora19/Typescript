//This is all that you need to know about type narrowing lol
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
//instanceof is used when the value is constructed with new keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// const d = new Date();
var d = "hello";
logValue(d);
function isFish(pet) {
    return pet.swim() !== undefined; //means consider pet as fish and check if there's a method swim
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
