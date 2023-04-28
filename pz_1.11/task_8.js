// simple calculate
//func add
function add(a, b){
 console.log(`${a} + ${b} = ${a + b}`);
}
// func sub
function sub(a, b){
    console.log(`${a} - ${b} = ${a - b}`);
}
//fucn mul
function mul(a, b){
    console.log(`${a} * ${b} = ${a * b}`);

}
//func div
function div(a, b){
    if(b === 0){
        console.log("Div can not")
    }else{
        console.log(`${a} / &{b} = ${a / b}`);
    }
}

//method for user
let a = +prompt("Enter first number:");
let b = +prompt("Enter second number:");

let operation = ("Enter operation(Add, Sub , Mul ,Div:)");

switch(operation){
    case "Add":
        add(a, b);
        break;
    case "Sub":
        sub(a, b);
        break;
    case "Mul":
        mul(a, b);
        break;
    case "Div":
        div(a, b);
        break
    default:   
    console.log("Unknown operation");           
}

