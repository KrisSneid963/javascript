let names = ["Olivia", "Jackson", "Sophia", "Elijah", "Ava", "Liam", "Isabella"];


function removeOlivia(arr) {
    const index = arr.indexOf("Olivia");
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}


function addMasonToFront(arr) {
    arr.unshift("Mason");
    return arr;
}


function addMyNameToEnd(arr, myName) {
    arr.push(myName);
    return arr;
}


function removeName(arr, name) {
    const index = arr.indexOf(name);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function addWithBob(arr) {
    return arr.map(name => name + "withBob");
}

function sortNamesDescending(arr) {
    return arr.sort((a, b) => b.localeCompare(a));
}

removeOlivia(names);

addMasonToFront(names);

addMyNameToEnd(names, "John");

removeName(names, "Sophia");

let withBob = addWithBob(names);
let sortedNames = sortNamesDescending(names);

console.log("Updated names:", names);
console.log("With Bob:", withBob);
console.log("Sorted names:", sortedNames);

