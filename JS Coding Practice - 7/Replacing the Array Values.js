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
    let startIndex = parseInt(readLine());
    let deleteCount = parseInt(readLine());
    let firstVal = JSON.parse(readLine().replace(/'/g, '"'));
    let secondVal = JSON.parse(readLine().replace(/'/g, '"'));

    /* Please do not modify anything above this line */

    /*
     * Write your code here and log the output.
     */
    myArray.splice(startIndex, deleteCount, firstVal, secondVal);
    console.log(myArray);
}
