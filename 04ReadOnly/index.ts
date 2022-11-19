type User = {
    readonly _id: string;  //Suppose I want _id to be read only and it shouldn't be modified
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails ?: number // ? is used to mark the field as optional. Now it's not mandatory to have this field
}

let newUser: User = {
    _id: "123",
    name: "Vaibhav",
    email: "hello@gg.com",
    isActive: true,
}

newUser.email = "newEmail@superfluid.com";
// newUser._id = "1234"; //This will throw an error


//Combining two types 


// first type
type cardNumber = {
    cardnumber: number;
    cardType: string;
}

//second type
type cardDate = {
    carddate: number;
}

//Combining both of them and creating a new type & also adding a new type
type cardDetails = cardNumber & cardDate & {
    cardCVV: number;
}

type newCardDetails = {
    cardNum: cardNumber;
    carddate: cardDate;
    cardCV: number;
}

let cardNum: cardNumber = {
    cardnumber: 123456789,
    cardType: "Visa"
}

let card: cardDetails = {
    cardnumber: 123,
    cardType: "Visa",
    carddate: 123,
    cardCVV: 123
}

let newCard: newCardDetails = {
    cardNum: {
        cardnumber: 123,
        cardType: "Visa"
    },
    carddate: {
        carddate: 123
    },
   cardCV: 12
}
export {};