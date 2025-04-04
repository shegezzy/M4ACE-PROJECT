
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  console.log(getFirstElement<number>([10, 20, 30])); // Output: 10
  console.log(getFirstElement<string>(["apple", "banana", "cherry"])); // Output: "apple"
  console.log(getFirstElement<boolean>([true, false, true])); // Output: true
  