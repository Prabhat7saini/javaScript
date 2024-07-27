function batchFetch(urls, batchSize) {
    // Helper function to fetch a URL and handle errors
    function fetchUrl(url) {
        return fetch(url).then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(`Failed to fetch ${url} with status ${response.status}`));
            }
            return response.json(); // Assuming you want to parse the response as JSON
        });
    }

    // Function to fetch a batch of URLs
    function fetchBatch(batch) {
        return Promise.all(batch.map(fetchUrl));
    }

    // Function to process batches sequentially
    function processBatchesSequentially(urls, batchSize) {
        const results = [];
        let index = 0;

        // Process each batch sequentially
        function processNextBatch() {
            if (index >= urls.length) {
                // All batches processed
                return Promise.resolve(results);
            }

            // Create the next batch of URLs
            const batch = urls.slice(index, index + batchSize);
            index += batchSize;

            // Fetch the current batch
            return fetchBatch(batch)
                .then(batchResults => {
                    results.push(...batchResults); // Append batch results to the results array
                    return processNextBatch(); // Process the next batch
                });
        }

        return processNextBatch();
    }

    // Start processing batches
    return processBatchesSequentially(urls, batchSize);
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3',
    'https://jsonplaceholder.typicode.com/posts/5',
    'https://jsonplaceholder.typicode.com/posts/6'
];
const batchSize = 2;

batchFetch(urls, batchSize)
    .then(results => {
        console.log('All results:', results);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
