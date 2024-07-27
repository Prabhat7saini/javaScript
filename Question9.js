// 1. Write a function fetchSequentially that takes an array of URLs and returns a promise. 
// This promise should resolve with an array of results, fetched sequentially in the given order.


function fetchSequentially(urls) {
    // Helper function to fetch a URL and handle errors
    function fetchUrl(url) {
        return fetch(url).then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(`Failed to fetch ${url} with status ${response.status}`));
            }
            return response.json(); // Assuming you want to parse the response as JSON
        });
    }

    // Reduce the array of URLs to a promise chain
    return urls.reduce((promiseChain, url) => {
        return promiseChain
            .then(results => fetchUrl(url)
                .then(result => [...results, result]) // Append the result to the array of results
            );
    }, Promise.resolve([])); // Initialize with a resolved promise with an empty array
}

// Example usage:
fetchSequentially(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'])
    .then(results => {
        console.log('Fetched results:', results);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
