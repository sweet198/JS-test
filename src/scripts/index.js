//task the sum of range
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
//second task
/*let arr = [1, 2, 3, 4, 5, 6];

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

reverseArrayInPlace(arr);*/

//third task
/*
let arr = [1, 2, 3];

const arrayToList = (array) => {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }

    return list;
}

arrayToList(arr);

const listToArray = (list) => {
    let array = [];

    for (let node = list; node; node = node.rest) {
       array.push(node.value);
    }
    console.log(array);
}

listToArray(arrayToList(arr));

const prepend = (elem, list) => {
    let newList = {};
    newList.value = elem;
    newList.rest = list;

    return newList;
}

console.log(prepend(2, arrayToList(arr)));*/

//test for yandex

const makeBoard = (width, height) => {
    let board = '';
    for (let i = 0; i < height; i++) {
        for (let k = 0; k < width; k++) {
            board += generateRandomCell();
        }
        board += '\n';
    }
    console.log(board);
    return board;
}

const generateRandomCell = () => Math.round(Math.random());

makeBoard(6, 3);

const makeNextStep = board => {
    for (let i = 0; i < board.length; i++) {

        console.log(board[i]);
    }
    console.log(board);
}

makeNextStep(makeBoard(6, 3));