function solution(rank, attendance) {
    let arr = [];
    let idx = 0;
    for(let j = 0; j < 3; j++){
        let min = attendance.length;
        for(let i = 0; i < rank.length; i++) {
            if(min > rank[i] && attendance[i]){
                min = rank[i];
                idx = i;
            }
        }
        arr.push(rank.indexOf(min));
        rank[idx] = rank.length+1;
    }

    return 10000 * arr[0] + 100 * arr[1] + arr[2];
}