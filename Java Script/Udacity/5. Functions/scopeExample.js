var scope = 'global scope';

function functionScope(){
    var functionSopeOuter = 'outer function scope';
    console.log(functionSopeOuter);
    console.log(scope);
    function functionInnerScope (){
        var functionInnerScope = 'inner function scope';
        console.log(scope);
        console.log(functionInnerScope);
    }
}

console.log(functionScope());