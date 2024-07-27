// 1.Create a function fetchWithRace that takes an array of URLs and a timeout value in milliseconds.
//  The function should return a promise that resolves with the first successful response or rejects with a timeout error if no request completes within the specified time.

function fetchWithRace(urls, timeout) {
    // Create a promise that will reject after the specified timeout
    const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Request timed out')), timeout)
    );

    // Create an array of fetch promises
    const fetchPromises = urls.map(url =>
        fetch(url).then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(`Failed to fetch ${url}`));
            }
            return response;
        })
    );

    // Race the fetch promises against the timeout promise
    return Promise.race([timeoutPromise, ...fetchPromises]);
}

// Example usage:
fetchWithRace(['https://jsonplaceholder.typicode.com/posts/1', 'https://jsonplaceholder.typicode.com/posts/2'], 5000)
    .then(response => {
        console.log('Received response:', response);
        return response.json();
    })
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
