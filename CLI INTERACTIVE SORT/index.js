process.stdout.write("Hello. Write a few words and numbers separated by a space or write exit to finish: ")
let flag1 = 1
let flag2 = 0
let input_array
let standard_input = process.stdin;
standard_input.setEncoding('utf-8');
standard_input.on('data', function (data) {
    data = data.trim()
    if(data === 'exit'){
        console.log("program exit");
        process.exit();
    }
    else{
if (flag1 == 0){
    process.stdout.write("Hello. Write a few words and numbers separated by a space or write exit to finish: ")
    flag1 += 1
}
       else if (flag1 == 1){
        if (flag2 != 1){
        input_array = data.split(" ")
        }
        else{
            flag2 = 0
        } 
        console.log(`
        1 - Sort words alphabetically
        2 - Sort digits in ascending order
        3 - Sort digits in descending order
        4 - Sort words by count of symbols
        5 - Show unique words
        6 - Show unique words and digits`)
        flag1 += 1
       }
    else if(flag1 == 2){
        flag1 = 0
switch(data){
    case '1':
       console.log(input_array.filter(element => isNaN(element)).sort())
      break;
    case '2':
        console.log(input_array.filter(element => !isNaN(element)).sort((a, b) => a - b))
        break;
    case '3':
        console.log(input_array.filter(element => !isNaN(element)).sort((a, b) => a - b).reverse())
       break;
    case '4':
        console.log(input_array.filter(element => isNaN(element)).sort((a, b) => a.length - b.length))
      break;
    case '5':
        console.log(Array.from(new Set(input_array.filter(element => isNaN(element)))))                  
      break;
    case '6':
        console.log(Array.from(new Set(input_array))); 
      break;
    default:
        flag1 = 1
        flag2 = 1
        process.stdout.write("Wrong input. ")
}
process.stdout.write("Click enter to continue: ")
    }
    }
});

