"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on("end", (_) => {
    inputString = inputString
        .trim()
        .split("\n")
        .map((str) => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* Please do not modify anything above this line */

function isValuePresent(myArray, val) {

    
    /*
     * Write your code here and return the output.
     */
    return myArray.includes(val);
}

/* Please do not modify anything below this line */

function main() {
    let myArray = JSON.parse(readLine().replace(/'/g, '"'));
    let val = JSON.parse(readLine().replace(/'/g, '"'));

    let isPresent = isValuePresent(myArray, val);

    console.log(isPresent);
}
