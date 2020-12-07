//task the som of range
/*function range(start, end, step = start < end ? 1 : -1) {
    let arr = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    } else {
        for (let i = end; i >= start; i += step) {
            arr.push(i);
        }
    }

    return arr
}

range(2, 10, 3);


function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += i;
    }
}*/

let arr = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
    let newArr = [];

    for(let item of arr) {
        newArr.unshift(item);
    }
    return newArr;
}

function reverseArrayInPlace(arr) {
    let arrLength = arr.length;
    for(let i = arrLength - 1; i >= 0; i--) {
        arr.push(arr[i]);
    }
    arr.splice(0, arrLength)
    return arr;
}

reverseArrayInPlace(arr);