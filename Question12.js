// Part 12

// Scenario: When fetching data from an API, you may need to implement a retry mechanism with exponential backoff to handle transient errors.
// Task: Write a function fetchWithExponentialBackoff(url, maxRetries) that takes a URL and a maximum number of retries. The function should return a promise that resolves with the fetched data or rejects after the specified number of retries, implementing an exponential backoff delay between retries.


async function fetchWithExponentialBackoff(url, maxRetries) {
    const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));
    
    let attempt = 0;
    
    while (attempt < maxRetries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Error fetching URL: ${response.statusText}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            attempt++;
            if (attempt >= maxRetries) {
                throw new Error(`Failed to fetch after ${maxRetries} attempts: ${error.message}`);
            }
            const backoffTime = Math.pow(2, attempt) * 100; // Exponential backoff delay
            await delay(backoffTime);
            console.log(`Retry attempt ${attempt}, retrying in ${backoffTime}ms...`);
        }
    }
}

// Example usage
const url = 'https://jsonplaceholder.typicode.com/posts/1';
const maxRetries = 5;

fetchWithExponentialBackoff(url, maxRetries)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Failed to fetch data:', error);
    });
