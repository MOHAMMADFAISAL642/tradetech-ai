let user = "John Doe";
const pi = 3.14159;
var isActive = true;
user = "Jane Smith";
isActive = false;
console.log("User:", user);
console.log("Pi:", pi);
console.log("Is Active:", isActive);


if (user === "Jane Smith") {
    let greeting = "Welcome back, Jane!";
    console.log(greeting);
}

console.log("Greeting variable is not accessible here:", typeof greeting);

if (isActive) {
    var statusMessage = "The user is active.";
}

console.log("Status Message:", statusMessage, "(accessible due to var scope)");

try {
    pi = 3.14; // This will cause an error because pi is a constant
} catch (e) {
    console.log("Error:", e.message);
}
