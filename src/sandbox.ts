//Creating your own types
type StringOrNum = string | number;
type objWithNameAndId = {name: string, uid: StringOrNum};

const logDetails = (uid: StringOrNum, item: string) =>{
    console.log(`${item} has uid of ${item}`)
}

const greet = (user: objWithNameAndId) =>{
    console.log(`${user.name} says hello`)
}

const greetAgain = (user: objWithNameAndId) =>{
    console.log(`${user.name} says hello`)
}