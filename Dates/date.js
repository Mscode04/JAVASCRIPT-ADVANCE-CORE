// JavaScript provides a Date object that allows you to work with dates and times. 
// The Date object can be used to get the current date and time, create new dates, and manipulate dates.


let now = new Date();
console.log(now)




let specificDate = new Date('2024-08-12T10:30:00');
console.log(specificDate)




let dateFromComponents = new Date(2024, 7, 12, 10, 30, 0); // Note: Months are zero-indexed (0 = January, 7 = August)
console.log(dateFromComponents)



let dateFromEpoch = new Date(1691823000000); // Epoch time in milliseconds
console.log(dateFromEpoch)

