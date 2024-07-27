function fetchAnyWithErrors(urls) {
    // Helper function to fetch a URL and handle errors
    function fetchWithErrorHandling(url) {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    return Promise.reject(new Error(`Failed to fetch ${url} with status ${response.status}`));
                }
                return response;
            });
    }

    // Create an array of fetch promises, each with error handling
    const fetchPromises = urls.map(url => fetchWithErrorHandling(url));

    // Use Promise.any to resolve with the first successful response or reject with an aggregated error
    return Promise.any(fetchPromises)
        .then(response => {
            // If we get a successful response, return it
            return response;
        })
        .catch(() => {
            // If all fetches fail, aggregate the error messages
            const errorMessages = fetchPromises.map(p => p.catch(err => err.message));
            return Promise.all(errorMessages).then(errors => {
                throw new Error(`All requests failed: ${errors.join('; ')}`);
            });
        });
}

// Example usage:
fetchAnyWithErrors(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/3'])
    .then(response => {
        console.log('Received response:', response);
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
