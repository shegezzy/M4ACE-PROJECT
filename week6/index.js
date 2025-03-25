// week6/index.js
import { getEvenNumbers, sumArray, flattenArray } from './arrayUtils.js';
import { createTypedArray, convertToTypedArray, convertToRegularArray } from './typedArrayUtils.js';

// Test array functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Even Numbers:', getEvenNumbers(numbers));
console.log('Sum of Array:', sumArray(numbers));

// Test flattening function
const nestedArray = [[1, 2], [3, 4], [5]];
console.log('Flattened Array:', flattenArray(nestedArray));

// Test TypedArray functions
const { typedArray, reversedArray } = createTypedArray();
const typedArrayFromRegular = convertToTypedArray(numbers);
console.log('Converted to TypedArray:', typedArrayFromRegular);
console.log('Converted back to Regular Array:', convertToRegularArray(typedArrayFromRegular));
