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

function findFirstBooleanOccurrence(myArray) {
    /*
     * Write your code here and return the output.
     */
    let index = myArray.findIndex(function (item) {
        if (typeof item === "boolean") {
            return true;
        } else {
            return false;
        }
    });
    return index;
}

/* Please do not modify anything below this line */

function main() {
    let myArray = JSON.parse(readLine().replace(/'/g, '"'));

    let firstBooleanIndex = findFirstBooleanOccurrence(myArray);

    console.log(firstBooleanIndex);
}
