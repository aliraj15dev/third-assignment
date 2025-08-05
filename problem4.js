/** Problem 04 - (Delete / Store) */
// var fileName= "pdfData.jpg";
//write your code here

var fileName = ['data.docx'];
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


// solve another way

// var fileName= ['result.pdf', 'data.docx', 'pdfData.jpg', '#exp.mp4', 'docx.txt', 'docx.xpdf', 'slipdf.txt' ];

// for(var file=0; file<fileName.length; file++){
//     if(fileName[file].startsWith('#') ||

//         fileName[file].endsWith('.pdf') ||

//         fileName[file].endsWith('.docx')){
//         console.log('Store');
//     }
//     else{
//         console.log('Delete');
//     }
// }