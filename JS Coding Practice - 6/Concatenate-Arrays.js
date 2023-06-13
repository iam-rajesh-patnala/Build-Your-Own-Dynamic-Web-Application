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

function concatenateTwoArrays(firstArray, secondArray) {
    /*
     * Write your code here and return the output.
     */
    return firstArray.concat(secondArray);
}

/* Please do not modify anything below this line */

function main() {
    let firstArray = JSON.parse(readLine().replace(/'/g, '"'));
    let secondArray = JSON.parse(readLine().replace(/'/g, '"'));

    let combinedArray = concatenateTwoArrays(firstArray, secondArray);

    console.log(combinedArray);
}
