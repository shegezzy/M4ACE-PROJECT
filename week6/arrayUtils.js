

export function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

export function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
export function flattenArray(nestedArr) {
    return nestedArr.flat();
}
