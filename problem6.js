/** Problem 06 :  (Current Salary )  */
// var experience = 30;
// var startingSalary = 45000;
//write your code here

var experience = 23;
var startingSalary = 27000;
var currentSalary=startingSalary;

for(var experienceYear=1; experienceYear<=experience; experienceYear++){
    currentSalary += currentSalary * 5/100;
}

console.log(currentSalary.toFixed(2));
