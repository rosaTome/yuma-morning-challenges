// function - takes an object 
const getKeysAndValues = (obj: any) => {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);

// reuturns the kesy and values as separate arrays 
    return[keys, values];
}
console.log(getKeysAndValues({ a: 1, b: 2, c: 3}));
console.log(getKeysAndValues({ a: "Apple", b: "Microsoft", c: "Google"}));
console.log(getKeysAndValues({ key1: true, key2: false, key3: undefined}));

// Notes

// - Remember to sort the keys.

// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

getKeysAndValues({ a: 1, b: 2, c: 3 });
[["a", "b", "c"], [1, 2, 3]];

getKeysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
[["a", "b", "c"], ["Apple", "Microsoft", "Google"]];

getKeysAndValues({ key1: true, key2: false, key3: undefined });
[["key1", "key2", "key3"], [true, false, undefined]];