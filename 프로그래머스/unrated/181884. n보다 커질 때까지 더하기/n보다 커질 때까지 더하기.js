function solution(numbers, n) {
    var answer = 0;
    numbers.map(item=>{
        if(answer>n)
            return;
        answer+=item;

    })
    return answer;
}