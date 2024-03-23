function solution(arr) {
    var answer = 1;
    outerLoop:
    for(let i = 0; i < arr.length; i++) {
        let a = arr[i];
        for(let j = 0; j < a.length; j++) {
            if(arr[i][j] != arr[j][i]){
                answer = 0;
                break outerLoop;
            }
        }
    }
    return answer;
}