function solution(number) {
    let arr = [];
    let answer = 0;
    arr = number.split('').map(item =>{
        return parseInt(item);
    })
    arr.map(item => {
        answer += item;
    })
    return answer % 9;
}