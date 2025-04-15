const obj = {
    name: "Alice",
    age: 25,
    job: "Engineer"
};

obj[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    let index = 0; 

    return {
        next: () => {
            if (index < keys.length) {
                const key = keys[index]; 
                const value = this[key];
                index++; 
                return { value: [key, value], done: false };
            }
            return { done: true };
        }
    };
};

for (const [key, value] of obj) {
    console.log(`${key}: ${value}`);
}
