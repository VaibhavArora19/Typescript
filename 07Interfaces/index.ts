interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial : () => string   //one way -> startTrial is a function that returns string
    startTrial(): string //Another way of creating a function in interface
    getCoupon(couponName: string): number
}

//if we define interface User again it'll add that field to the existing interface User
interface User {
    githubToken: string,
}

//inheritance is also possible with interfaces
interface Admin extends User {
    AdminId: number;
}

const vaibhav: User = {
    dbId: 1,
    email: "aroravaibhav817",
    userId: 1,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "VaibhavArora19") => {
        return 10;
    },
    githubToken: "1234567890" //addition to the existing interface User
};

const vaib: Admin = {
    dbId: 1,
    email: "aroravaibhav817",
    userId: 1,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "VaibhavArora19") => {
        return 10;
    },
    githubToken: "1234567890", //addition to the existing interface User
    AdminId: 31 //Since admin extends User, it has all the properties of User and AdminId
};