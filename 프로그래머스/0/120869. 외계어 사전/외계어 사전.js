function solution(spell, dic) {
    let answer = 2;
    for(let i = 0; i < dic.length; i++){
        let count = 0;
        for(let j = 0; j < spell.length; j++){
            if(dic[i].includes(spell[j])){
                count++;
            }   
        }
        count === spell.length ? answer = 1 : null;
    }
    return answer;
}