// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order. Create a function that takes in an array of names and returns the name of the secret society.

// Notes:

// - The secret society's name should be entirely uppercased.

    //   societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
    //   societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
    //   societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"



    // function 
     const societyName = (names) => {

        // takes an array of names 
        let initials = [];

        // iterate each  names array
        names.forEach((name) => {

        // gets the first letter of each name and push it to the initials array
        initials.push(name.charA(0));
        });

        // sort the initials array alphabetically 
        initials.sort();

        // join sorted intials into a signle string and convert to uppercase 
        const secretName = initials.join('').toUpperCase();

        // return the uppercase secret society name 
        return secretName;
    };

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));


