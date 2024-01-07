const sumAll = function(lowerLimit, upperLimit) {
    let sum = 0;

    if(lowerLimit > 0 && upperLimit > 0 && typeof(lowerLimit) === 'number' && typeof(upperLimit) === 'number'){
        if(lowerLimit < upperLimit){
            for(let i = lowerLimit; i <= upperLimit; i++){
                sum+=i;
            }
        }
        else{
            for(let i = lowerLimit; i >= upperLimit; i--){
                sum+=i;
            }
        }
        return sum;
    }
    else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = sumAll;
