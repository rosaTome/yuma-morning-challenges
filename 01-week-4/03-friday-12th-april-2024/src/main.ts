// Create a function to return the amount of potatoes there are in a string.

//       potatoes("potato") ➞ 1
//       potatoes("potatopotato") ➞ 2
//       potatoes("potatoapple") ➞ 1


// function
const amountOfPotatoes = (str: string) => {

    // split the string by the word potato
    return str.toLowerCase().split('potato').length - 1;
}
