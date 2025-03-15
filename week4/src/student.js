// src/student.js

const student = {
    name: 'Olusegun Akinnola',
    age: 20,
    grade: 'A'
  };
  
  function greetStudent() {
    console.log(`Hello, ${student.name}! Welcome to the class.`);
  }
  
  // Ensure both are correctly exported
  module.exports = {
    student,
    greetStudent
  };
  