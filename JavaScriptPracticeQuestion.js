function addNumbers(a, b) {
    return a + b;
  }
  
  // Example usage:
  console.log(addNumbers(5, 3)); // Output: 8

  


  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(reverseString('hello')); // Output: 'olleh'

  
  function isEvenOrOdd(num) {
    if (num &1) {
      return 'Odd';
    } else {
      return 'Even';
    }
  }
  
  // Example usage:
  console.log(isEvenOrOdd(4)); // Output: 'Even'
  console.log(isEvenOrOdd(7)); // Output: 'Odd'
  



  function fetchDataFromServer() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched from server');
      }, 2000); // Simulates a delay of 2 seconds
    });
  }
  
  // Example usage:
  fetchDataFromServer().then(data => {
    console.log(data); // Output: 'Data fetched from server'
  });
  