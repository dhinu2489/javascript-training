//global scope
var globalvar = 'dinesh';


//global scope
function globalFunction() {

    //local scope of global function
    var localVariable1 = 'localVar1';
    localFunction();

    //local scope of globalFunction 
    function localFunction() {

        //local scope of localFunction
        var localVariable2 = 'localVar2';
        //lexical scope - localFunction has access to parent function and its scope
        globalFunction2();
    }

}


//global scope
function globalFunction2() {
    var localVariable3 = 'localVariable3';
    console.log(localVariable2);
}
