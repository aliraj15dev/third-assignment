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