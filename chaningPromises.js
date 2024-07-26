// Part 2: Chaining Promises
// Print out "Program started" at the start of your code.
// Create a Promise that resolves after 3 seconds.
// Log out the promise while it's pending.
// Print out "Program in progress..." as well.
// Print out "Step 1 complete" when the first promise fulfills.
// Have the first promise return another new Promise that will fulfill after 3 seconds with the message: "Step 2 Complete".
// Print out the message from the second promise after it fulfills ("Step 2 Complete").


console.log("Program started");

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
});

console.log("Program in progress...");

promise2.then(() => {
    console.log("Step 1 complete");
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Step 2 Complete"), 3000);
    });
}).then(message => {
    console.log(message);
});
