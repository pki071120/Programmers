function solution(my_string) {
    let answer = my_string.split(" ");
    for(let j = 0; j< my_string.length; j++){
        for(let i = 0; i < my_string.length; i++){
            if(answer[i] == "") answer.splice(i, 1);
        }    
    }
    return answer;
}