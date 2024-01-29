function solution(arr) {
    let i = 0;
    var stk = [];
    while(i<arr.length){
        if(stk[0]==undefined){
            stk.push(arr[i]);
            i++;
        }
        else if(stk[0]!=undefined){
            if(stk[stk.length-1]<arr[i]){
                stk.push(arr[i]);
                i++;
            }
            else if(stk[stk.length-1]>=arr[i]){
                stk.pop();
            }
        }
    }
    
    return stk;
}