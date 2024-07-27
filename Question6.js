// 1. Create a function fetchAllWithErrors that takes an array of URLs and returns a promise.
//  This promise should resolve with an array of results if all requests are successful or reject with the first error encountered.



function fetchAllWithErrors(urls) {
    // Create an array of fetch promises with error handling
    const fetchPromises = urls.map(url =>
      fetch(url)
        .then(response => {
          if (!response.ok) {
            return Promise.reject(new Error(`Failed to fetch ${url}: ${response.statusText}`));
          }
          return response.json();
        })
    );
  
    // Use Promise.all to handle all fetch promises
    return Promise.all(fetchPromises)
      .then(results => {
        // If all promises are resolved, return the results
        return results;
      })
      .catch(error => {
        // If any promise is rejected, return the first error encountered
        return Promise.reject(error);
      });
  }

  


  fetchAllWithErrors([
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ])
    .then(results => {
      console.log('All fetches succeeded:', results);
    })
    .catch(error => {
      console.error('Error encountered:', error);
    });
  