// week6/typedArrayUtils.js

export function createTypedArray() {
    let typedArray = new Uint8Array([10, 20, 30, 40, 50]);
    console.log('TypedArray:', typedArray);

    let reversedArray = typedArray.slice().reverse();
    console.log('Reversed TypedArray:', reversedArray);

    return { typedArray, reversedArray };
}
export function convertToTypedArray(arr) {
    return new Uint8Array(arr);
}

export function convertToRegularArray(typedArr) {
    return Array.from(typedArr);
}
