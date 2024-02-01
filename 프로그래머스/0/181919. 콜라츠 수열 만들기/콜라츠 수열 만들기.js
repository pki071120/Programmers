function solution(n) {
    var answer = [];
    answer.push(n);
    while(n!==1){
        if(n%2==0){
            answer.push(n/2);
            n/=2;
        }
        else{
            answer.push(n*3+1)
            n=n*3+1;
        }
    }
    return answer;
}