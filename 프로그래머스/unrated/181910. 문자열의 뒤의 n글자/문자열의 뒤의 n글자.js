function solution(my_string, n) {
    var arr = Array.from(my_string);
    let answer = arr.slice(arr.length-n,arr.length).join('');
    
    return answer;
}