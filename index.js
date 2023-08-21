// Code your solutions in this file
function writeCards(names, eventName) {
    const array = [];
    for (let i = 0; i < names.length; i++) {
        array.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    
    return array;

}

function countDown(number) {
    let n = number; 
    while (n >= 0) {
        console.log(n--);
    }

    return n;
}