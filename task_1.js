Array.prototype.map = function(callback, thisArg) {
    const result=[]
    for(let i=0;i<this.length;i++)
        if (i in this){
            const newValue=callback.call(thisArg,this[i],i,this)
            result.push(newValue)
        }
    return result
};

const nums=[1,2,3,4,5,6,7,8];
const res=nums.map((x)=> x+5);
console.log(res);

Array.prototype.filter = function(callback, thisArg) {
    const result=[]
    for(let i=0;i<this.length;i++)
        if (i in this){
            if (callback.call(thisArg,this[i],i,this))
                result.push(this[i])
        }
    return result

};

const res2=nums.filter((x)=> x%2==0);
console.log(res2);


Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue;
    let start=0;
    if (accumulator==undefined){
        accumulator=this[0]
        start=1
    }
    for (let i=start;i<this.length;i++){
        accumulator=callback.call(accumulator,this[i],i,this)
    }
    return accumulator;


};

const res3 = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(res3);
