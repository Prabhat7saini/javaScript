async function fetchWithFallback(urls) {
    const fetchPromises = urls.map(url => 
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching URL: ${response.statusText}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(`Failed to fetch ${url}: ${error.message}`);
                return null; // Return null for failed fetches
            })
    );

    const results = await Promise.all(fetchPromises);
    const successfulResults = results.filter(result => result !== null);

    if (successfulResults.length === 0) {
        throw new Error('All fetches failed');
    }

    return successfulResults;
}

// Example usage
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/6'
];

fetchWithFallback(urls)
    .then(results => {
        console.log('Fetched results:', results);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });
