const removeFromArray = function(array, ...restArgs) {

    let restArgsIndex;

    // Outer loop runs through restArgs array
    for(let j = 0; j < restArgs.length; j++){
        // Assign current restArgs index to variable
        restArgsIndex = restArgs[j];

        // Inner loop compares restArgsIndex value to "array" array and splices out any values that match
        for(let i = 0; i < array.length; i++){
            if(array[i] === restArgsIndex){
                array.splice(i, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
