function solution(num_list) {
    let answer = 0;
    if (num_list.length > 10) {
        num_list.map(item => {
            answer += item;
        });
        return answer
    } else {
        answer = 1;
    }
    num_list.map(item => {
        answer *= item;
    });
    return answer;
}