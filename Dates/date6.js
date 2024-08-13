// In JavaScript, the Date object provides methods to work with UTC time:

// Get UTC Date Components:
let now = new Date();
let utcYear = now.getUTCFullYear();
let utcMonth = now.getUTCMonth();
let utcDate = now.getUTCDate();


// Set UTC Date Components:
let date = new Date();
date.setUTCFullYear(2024);
date.setUTCMonth(7); // August (0-indexed)
date.setUTCDate(12);


// Convert Local Time to UTC String:
let localTimeString = now.toISOString();

