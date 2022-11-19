//when we declare an array of multiple types it can take any args first there is no order
// const user: (string | number)[] = [1, "abc"]; // this is correct
const user: (string | number)[] = ["abc", 1]; // this is also correct

//But with tuples data is organised in the way you declare a tuple
// const newUser : [string, number] = [1, "abc"]; //wrong way
const newUser: [string,  number] = ["abc", 1];//correct way