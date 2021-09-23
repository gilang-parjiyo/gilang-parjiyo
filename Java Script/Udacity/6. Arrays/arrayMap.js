var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function (donut){ //map create new array from array 'donuts' that has been modified
    donut += ' jco';
    donut = donut.toUpperCase();
    return donut;
});

console.log(improvedDonuts, donuts);