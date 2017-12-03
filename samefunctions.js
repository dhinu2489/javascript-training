/*

Two functions with the same name  - the last one declared gets the preference.

This happens because when execution context creates the Variable Object, it can contain only unique properties inside the object.
So t=even though initially the first property gets pointed to the first function during creation phase, then immediately the second 
funciton overrides during the creation phase i.e when trying to point the second method.

*/



function myName(){
    console.log('Dinesh');
}

function myName(){
    console.log('Dinesh Kumar');
}


myName();