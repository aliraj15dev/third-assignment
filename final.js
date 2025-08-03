/** Problem -01 ( Divide the Asset ) */
// var area = 800;
//write your code here

var area = 58000;
var sonsLand=area/2;
console.log(sonsLand);


/** Problem -02 ( Cycle or Laptop ) */
// var money = 10000;
//write your code here

var money = 23500;
if (money>=25000){
    console.log('Laptop');
}
else if(money>=10000){
    console.log('Cycle');
}
else{
    console.log('Chocolate');
}


/** Problem -03 ( Medicine Planner ) */
// var lastDay = 11 ;
//write your code here

var lastDay = 15;
for(var takeMedicine=1; takeMedicine<=lastDay; takeMedicine++){
     if(takeMedicine%3 === 0){
        console.log(takeMedicine, '- medicine');
     }
     else{
        console.log(takeMedicine, '- rest');
     }
}


/** Problem 04 - (Delete / Store) */
// var fileName= "pdfData.jpg";
//write your code here

var fileName = ['result.pdf', 'data.docx', 'pdfData.jpg', '#exp.mp4', 'docx.txt', 'docx.xpdf', 'slipdf.txt'];
for (var files = 0; files<fileName.length; files++){
    var file = fileName[files];

    var last4 = file.slice(-4);
    var last5 = file.slice(-5);
    var first1 = file[0];

    if(last4 === '.pdf' || last5 ==='.docx' || first1  === '#'){
        console.log('Store');
    }
    else{
        console.log('Delete');
    }
}


/** Problem 05 - ( PH Email Generator )  */
// var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here

var student = { name: "aliraj", roll: 20, department: "politicalScience" };

console.log(student.name+student.roll+'.'+student.department+'@ph.ac.bd');


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