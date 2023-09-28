function recievesAFunction(callback){
 callback();

}

function returnsAnAnonymousFunction() {
    return function(){};
}

function returnsANamedFunction(){
    return function namedFunction() {};
}