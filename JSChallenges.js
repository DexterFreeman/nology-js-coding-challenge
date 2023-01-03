function isNumberPositive(number){
    answer = Math.sign(number);
    if (answer == -1){
        return false; 
    }
    return true; 

}


function convertDaysToAge(number){
    return number / 365; 

}


function getLargestNumber(firstNumber, secondNumber, thirdNumber){
    if (firstNumber >= secondNumber && firstNumber >= thirdNumber){
        return firstNumber; 
    } 
    else if (secondNumber >= firstNumber && secondNumber >= thirdNumber){
        return secondNumber;
    }
    return thirdNumber; 

}

function getLastName(listOfNames){
    return listOfNames[listOfNames.length - 1];

}

function allNumbersPositive(listOfNumbers){
    let result = listOfNumbers.filter(function(number) {
        return number < 0;
      });
    if (result != 0) {
        return false; 
    }
    return true;
}

console.log(allNumbersPositive([-5,-4,6]));