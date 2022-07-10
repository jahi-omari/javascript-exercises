const repeatString = function(string, num) {
    let stringInput = '';
    let i = 0;

    if(num < 0){
        return "ERROR";
    }
    else{
        while(i < num){
            stringInput += string;
            i++;
        }
        return stringInput;
    }
};

// Do not edit below this line
module.exports = repeatString;
