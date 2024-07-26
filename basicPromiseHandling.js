// Part 1: Basic Promise Handling
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 3 seconds and rejects after 2 seconds.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Print out "Program complete" if the promise fulfills.
// Print out "Program failure" if the promise rejects.







console.log("Program started");

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
    setTimeout(reject, 2000);
});

console.log("Program in progress...");

promise1.then(() => {
    console.log("Program complete");
}).catch(() => {
    console.log("Program failure");
});



// Explation----
// A Promise is created and assigned to the variable promise1.
// The promise constructor takes a function with two parameters: resolve and reject.
// Inside the constructor function:
// setTimeout(resolve, 3000); sets a timeout to call the resolve function after 3 seconds (3000 milliseconds).
// setTimeout(reject, 2000); sets a timeout to call the reject function after 2 seconds (2000 milliseconds).
// In this setup, the reject timeout will execute before the resolve timeout because it is set for a shorter duration. Since only one of resolve or reject will be called, and in this case reject will be called first, the promise will be rejected.