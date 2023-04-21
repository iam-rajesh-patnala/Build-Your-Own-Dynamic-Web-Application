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

function getSliceFromArray(myArray, startIndex, endIndex) {
    /*
     * Write your code here and return the output.
     */
    return myArray.slice(startIndex, endIndex);
}

/* Please do not modify anything below this line */

function main() {
    let myArray = JSON.parse(readLine().replace(/'/g, '"'));
    let startIndex = JSON.parse(readLine());
    let endIndex = JSON.parse(readLine());

    let slicedArray = getSliceFromArray(myArray, startIndex, endIndex);

    console.log(slicedArray);
}
