var dinesh = {

    name: 'Dinesh Kumar',
    lastName: 'Sundararajan',
    dateOfBirth: '12/24/1989',
    job: 'Developer',
    family: ['Sundararajan', 'Gajalakshmi', 'Vignesh Kumar']
};

console.log('Dinesh-->' + dinesh);
console.log('Dinesh \'s Family members are :' + dinesh.family);

//objects with functions within it

var dinesh2 = {

    name: 'Dinesh Kumar',
    lastName: 'Sundararajan',
    dateOfBirth: '12/24/1989',
    job: 'Developer',
    family: ['Sundararajan', 'Gajalakshmi', 'Vignesh Kumar'],
    calculateAge: function (currentYear) {

        var yearOfBirth = this.dateOfBirth.substr(this.dateOfBirth.lastIndexOf('/')+1, this.dateOfBirth.length);
        console.log('yearOfBirth-->' + yearOfBirth);
        return currentYear - yearOfBirth;//does type co-ersion and returns the value
    }

};

console.log('Age of Dinesh is-->' + dinesh2.calculateAge(2017));

//using for loops to iterate over the array

for(var i=0; i<dinesh.family.length;i++){
    console.log('Family Member '+(i+1)+ ' is '+dinesh.family[i]);
}

//continue and break statements
/*
    continue - if the condition is satisfied, skips the iteration and passes control to next iteration. statement after the condition 
    will not be executed.
    break - Breaks from the entire loop and subsequent iterations will not be performed.
*/

for(var i=0 ; i<dinesh.family.length; i++){
    console.log('Mother\'s Name is...');
    
    if(i===1){
        console.log(dinesh.family[i]);
    }
    
}

//re-position Vicky at first
dinesh.family.pop();
dinesh.family.unshift('Vignesh Kumar');
var i=0;
while(i<dinesh.family.length){
    console.log('Parents are...');
    
    if(i===0){
        continue;
    }
    console.log(dinesh.family[i]);
    i++;
}