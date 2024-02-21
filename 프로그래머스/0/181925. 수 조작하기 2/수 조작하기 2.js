function solution(numLog) {
    var ansList = [];
    for(let i = 1; i <= numLog.length; i++){
        if(numLog[i] - numLog[i-1] == 1)
            ansList.push('w');
        else if(numLog[i] - numLog[i-1] == -1)
            ansList.push('s');
        else if(numLog[i] - numLog[i-1] == 10)
            ansList.push('d');
        else if(numLog[i] - numLog[i-1] == -10)
            ansList.push('a');
    }
    return ansList.join("");
}