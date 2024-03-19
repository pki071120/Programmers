function solution(arr, flag) {
    var answer = [];
    for(let i = 0; i < arr.length; i++){
        let count = 0;
        if(flag[i]){
            while(count < arr[i]*2){
                answer.push(arr[i]);
                count++;
            }
        }
        else {
            while(count < arr[i]){
                answer.pop();
                count++;
            }
        };
    }
    return answer;
}