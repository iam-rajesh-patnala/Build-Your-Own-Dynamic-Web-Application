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

function main() {
    let myArray = JSON.parse(readLine().replace(/'/g, '"'));
    let val = JSON.parse(readLine().replace(/'/g, '"'));

    /* Please do not modify anything above this line */
    /*
     * Write your code here and log the output.
     */
    myArray.splice(0, 0, val);
    console.log(myArray);
}
