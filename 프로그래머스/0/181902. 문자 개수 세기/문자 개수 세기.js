function solution(my_string) {
    var arr = my_string.split("");
    let answer = Array.from({length: 52}, () => 0);
    arr.forEach(item => {
        var ACN = item.charCodeAt(0);
        if (ACN >= 65 && ACN <= 90) {
            answer[ACN - 65]++;
        } else if (ACN >= 97 && ACN <= 122) {
            answer[ACN - 71]++;
        }
    });
    return answer;
}
