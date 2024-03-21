function solution(arr) {
    var answer = arr;
    let i = 0;
    while(true){
        if(answer.length > 2 ** i)
            i++;
        else if(answer.length < 2 ** i)
            answer.push(0);
        else
            break;
    }
    return answer;
}