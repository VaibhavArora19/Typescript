//Union types allow you to define multiple types of a single variable
let score: number | string = 33;

score = 44;

score = "Twenty nine";

type User = {
    name: string,
    id: number,
}

type Admin = {
    userName: User,
    _id: number
}

let admin: Admin = {
    userName: {
        name: "Vaibhav",
        id: 123
    },
    _id: 1
}

let Vaibhav : User | Admin;

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }

getDbId(3);
getDbId("3");


function getDbId(id: number | string){
    //making some API calls

    // id.toLowerCase();  will throw err bcz data-type is 'number | string and not string only
    //in order to prevent the error

    if(typeof id === "string"){
        id.toLowerCase();
    }

    if(typeof id === "number"){
        id + 2;
    }
    console.log(`DB id is ${id}`);
}

//Arrays in TS
const data1: number[] = [1,2,3,4,5];
//different ways of writing an array of number
const data2: Array<number> =[1,2,3,4];

const data3: Array<string> = ["abc", "def"];

const data4: (string | number)[] = [1,2,3,4,5, "abc"]; //array can contain both string and number no fucking issues

const data5: string[] | number[] = [1,2,3,4,5] //array can either contain string or number not both at the same time

let pi: 3.14 = 3.14;
// pi = 3.89;  //will throw error bcz pi is a constant

let seatAllotment : "aisle" | "window" | "middle";

seatAllotment = "aisle";
// seatAllotment = "crew"; will throw err coz seatAllotment can only be aisle, window or middle

export {};