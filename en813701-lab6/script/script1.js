function sortIntNum(arrayForsort) {
    let  sortedNum = arrayForsort.sort(function(a, b){return a-b});
    return sortedNum ;
}
function findAverage(zArray) {
    let plusresultNum = 0 ;
    let totalNum = 0 ;
    for (i=0;i<=zArray.length-1;i++) {
        plusresultNum = plusresultNum + zArray[i];
        totalNum++;
    }
    let averageNum = plusresultNum/totalNum;
    return   averageNum ;
}
function findMin(xArray) {
    return xArray[0] ;
}
function findMax(yArray) {
    return yArray[yArray.length-1] ;
}
function checkEmptyArray(array) {
    return (Array.isArray(array) && array.length) ? true: false;
}
function readInput() {
    let input = prompt('Enter an integer (a negative integer to quit):', '');
    let setOfNum = [];
    let displayText = 'For the list ' ;
    for(;;) {
        if ( input > 0 && input.indexOf('.') == -1 ) {
            setOfNum.push(parseInt(input));
            input = prompt('Enter an integer (a negative integer to quit):', '');
        } else if (input < 0 && input.indexOf('.') == -1) {
            if (checkEmptyArray(setOfNum) == true) {
                break;
            }else{
                displayText = displayText + 
                'For the list is empty, the average is 0, the minimum is 0, and the maximum is 0';
                return displayText;
            }
        } else {
            input = prompt('Enter an integer (a negative integer to quit):', '');

        }
    }
    displayText = displayText + setOfNum + ',';
    sortedlist = sortIntNum(setOfNum);
    avgNum = findAverage(sortedlist);
    displayText = displayText + 'the average is ' + avgNum.toFixed(2) + ','
    minNum = findMin(sortedlist);
    displayText = displayText + 'the minimum is ' + minNum + ','
    maxNum = findMax(sortedlist);
    displayText = displayText + 'and the maximum is ' + maxNum 
    return displayText ;
}
function displayStats(displayText) {
    return alert(displayText);
}
list = readInput();
displayStats(list);