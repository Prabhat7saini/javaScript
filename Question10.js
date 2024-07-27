async function conditionalChaining(initialURL, secondaryURL1, secondaryURL2) {
    try {
        // Fetch the initial URL
        const initialResponse = await fetch(initialURL);
        if (!initialResponse.ok) {
            throw new Error(`Error fetching initial URL: ${initialResponse.statusText}`);
        }
        const initialData = await initialResponse.json();

        // Determine which secondary URL to fetch based on initialData
        const condition = initialData.someKey; // Replace someKey with your specific key/condition
        const secondaryURL = condition ? secondaryURL1 : secondaryURL2;

        // Fetch the secondary URL
        const secondaryResponse = await fetch(secondaryURL);
        if (!secondaryResponse.ok) {
            throw new Error(`Error fetching secondary URL: ${secondaryResponse.statusText}`);
        }
        const secondaryData = await secondaryResponse.json();

        return { initialData, secondaryData };
    } catch (error) {
        console.error('Error in conditionalChaining:', error);
    }
}

// Example usage
const initialURL = 'https://jsonplaceholder.typicode.com/posts/1';
const secondaryURL1 = 'https://jsonplaceholder.typicode.com/posts/2';
const secondaryURL2 = 'https://jsonplaceholder.typicode.com/posts/3';

conditionalChaining(initialURL, secondaryURL1, secondaryURL2)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
