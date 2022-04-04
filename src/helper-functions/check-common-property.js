export default function checkCommonProperty(arr, propertyName) {
    // returns the catergory of the quiz
    let isSame = true;
    let propertyVal;
    for(let i = 1; i<arr.length; i++) {
        let questions = arr;
        let firstVal = questions[0][propertyName];
        let currentProperty = questions[i][propertyName];
        if(currentProperty !== firstVal) {
            isSame = false;
        }
    }
    if(isSame) {
        propertyVal = arr[0][propertyName]
        return propertyVal
    } else {
        return false
    }
  }