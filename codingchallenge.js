var currentYear = 2017;
var familyYears = [1989, 1956, 1960, 1993];
var randomYears = [1998, 1996, 1978, 2002];
var ages = [];
var full_1 = [];
var full_2 = [];

function printFullAge(years) {
    var result = [];
    for (var i = 0; i < years.length; i++) {
        //console.log(years.length);
        ages[i] = currentYear - years[i];
        // console.log(ages);
    }
    //console.log(ages);
    for (var i = 0; i < ages.length; i++) {

        if (ages[i] > 18) {
            //console.log('Age is ' + ages[i] + ' Full age is reached.');
            result.push(true);
        } else {
            // console.log('Age is ' + ages[i] + 'Full age is not reached.');
            result.push(false);
        }
        //console.log(result);


    }
    return result;
}


//get ages for familyYears...
full_1 = printFullAge(familyYears);
console.log('full_1-->' + full_1);
//get ages for random years
full_2 = printFullAge(randomYears);
console.log('full_2-->' + full_2);