//Union types allow you to define multiple types of a single variable
var score = 33;
score = 44;
score = "Twenty nine";
var admin = {
    userName: {
        name: "Vaibhav",
        id: 123
    },
    _id: 1
};
var Vaibhav;
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    //making some API calls
    // id.toLowerCase();  will throw err bcz data-type is 'number | string and not string only
    //in order to prevent the error
    if (typeof id === "string") {
        id.toLowerCase();
    }
    if (typeof id === "number") {
        id + 2;
    }
    console.log("DB id is ".concat(id));
}
//Arrays in TS
var data1 = [1, 2, 3, 4, 5];
//different ways of writing an array of number
var data2 = [1, 2, 3, 4];
var data3 = ["abc", "def"];
var data4 = [1, 2, 3, 4, 5, "abc"];
var data5 = [1, 2, 3, 4, 5]; //array can either contain string or number not both at the same time
var pi = 3.14;
// pi = 3.89;  //will throw error bcz pi is a constant
