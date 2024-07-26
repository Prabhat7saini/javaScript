// Write a function fetchWithRetry that takes a URL and a number of retries. The function should return a promise that resolves with the fetched data or retries the request up to the specified number of times before rejecting with an error message.







function fetchWithRetry(url, retries) {
    return new Promise((resolve, reject) => {
      function attemptFetch(attempt) {
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => resolve(data))
          .catch(error => {
            if (attempt === retries) {
              reject(new Error(`Failed to fetch data after ${retries} attempts: ${error.message}`));
            } else {
              console.log(`Attempt ${attempt} failed. Retrying...`);
              attemptFetch(attempt + 1);
            }
          });
      }
  
      attemptFetch(1);
    });
  }
  
  // Usage example:
  fetchWithRetry('https://api.example.com/data', 3)
    .then(data => console.log('Fetched data:', data))
    .catch(error => console.error('Error:', error));
  