// const User = {
//     name: "Vaibhav",
//     email: "vaibhav@hello.co",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){};

function createCourse():{}{
    return {};
};

function createBusiness(): object{
    return {};
}

let newUser = {name: "Vaibhav", isPaid: true, email: "h@h.com"};
// createUser(newUser);
createCourse();
createBusiness();


//Type aliases
type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User{
    return user;
}


const user: User = {
    name: "Vaibhav",
    email: "h@H.com",
    isActive: true
}

createUser(user);
export {};