function isEmpty(obj){
    if (Array.isArray(obj)){
        return (obj.length === 0);
    }
    else{
        return Object.keys(obj).length === 0;
    }
}


console.log(isEmpty({"x": 5, "y": 42}));
console.log(isEmpty({}));              
console.log(isEmpty([null, false, 0]));
console.log(isEmpty([]));               