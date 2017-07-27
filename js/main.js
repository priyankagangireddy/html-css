//adding


var x=5; // globalvariable
var y=4;
function addNumbers(){

    var z=x+y; // local variable

    console.log(z);
};
addNumbers();

//parameters

function parameters(a){
    console.log(a);
}

parameters(100);

function addingParam(a,b){
   console.log(a+b);
}

addingParam(20,10);

function squareRootOfTwoNumbers(x,y){
    console.log((x+y)*(x+y));
}

squareRootOfTwoNumbers(4,2);


