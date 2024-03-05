function solution(myString) {
    var arr = myString.split('x');
    let answer = [];
    for(let i = 0; i<arr.length;i++){
        arr[i].split('');
        answer.push(arr[i].length);
    }
    return answer;
}