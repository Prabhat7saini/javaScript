// Write a function fetchWithTimeout that takes a URL and a timeout value in milliseconds. 
// The function should return a promise that resolves with the fetched data or rejects with a timeout error if the request takes longer than the specified timeout.
// 



function fetchWithTimeout(url, timeout) {
    return new Promise((resolve, reject) => {
      // Create a fetch promise
      const fetchPromise = fetch(url);
  
      // Create a timeout promise
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timed out')), timeout)
      );
  
      // Use Promise.race to return the result of whichever promise settles first
      Promise.race([fetchPromise, timeoutPromise])
        .then(response => {
          // If fetchPromise resolves, we need to check if it was successful
          if (!response.ok) {
            return Promise.reject(new Error('Network response was not ok'));
          }
          // Parse the response as JSON (or any other format you need)
          return response.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  fetchWithTimeout('https://jsonplaceholder.typicode.com/posts', 5000)
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));







  