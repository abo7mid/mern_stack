// predicted value undefined
console.log(hello);                                   
var hello = 'world';                                 

// predicted value magnet

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// predicted value super cool
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);



// predicted value chicken, half-chicken

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// predicted value chicken, fish, fish

mean();
console.log(food);
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// predicted value san jose, seattle, burbank, san jose

dojo = "san jose";
console.log(dojo);
learn();   // becuase of hoisting function can be called before definition
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// // predicted value {name :"Chicago", students:65, hiring:true}, dojo = "closed for now"
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
        dojo.adding = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //note after running the code // because it is defined as const, it cannot be changed. TypeError: Assignment to constant variable
    }
    return dojo;
}






