function getAllKeys(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

const person = {
    name: "John",
    age: 30
};

Object.prototype.greet = function() {
    console.log("Hello!");
};

console.log(getAllKeys(person)); 
