// Time Calculations
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);


let startDate = new Date('2024-08-01');
let endDate = new Date('2024-08-12');
let differenceInTime = endDate - startDate; // Difference in milliseconds
let differenceInDays = differenceInTime / (1000 * 3600 * 24); // Convert to days
