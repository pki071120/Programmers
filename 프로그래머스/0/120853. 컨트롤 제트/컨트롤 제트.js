function solution(s) {
    var answer = 0;
    let arr = s.split(" ");
    for(let i = 0; i < arr.length; i++){
        let n = 0;
        if(arr[i]!=='Z'){
            n = Number(arr[i]);
        }
        if(i > 0 && arr[i]==='Z'){
            n = Number(arr[i-1]);
            answer-=n
            continue
        }
        answer+=n
    }
    return answer;
}