function solution(my_string, k) {
    let answer0 = ""
    for(let i=0;i<k;i++){
        answer0+=my_string
    }
    
    const answer1 = my_string.repeat(k);
    
    
    return answer0;
}