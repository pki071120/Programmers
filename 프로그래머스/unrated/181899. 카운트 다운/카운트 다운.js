function solution(start, end_num) {
    var ans = [];
    for(let i=start, j=0; i>=end_num;i--,j++) {
        ans[j]=i;
    }
    return ans;
}