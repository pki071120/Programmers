function solution(n, lost, reserve) {
  var answer = n;
  let res1 = reserve.sort((a,b) => a-b);
  let los1 = lost.sort((a,b) => a-b);
  
  res1.map((item, index) => {
      if(los1.includes(item)){
        res1[index] = -1;
        los1[los1.indexOf(item)] = -1;
      }     
  })
  
    for(let i = 0; i < los1.length; i++){
        for(let j = 0; j <res1.length; j++){
             if(los1[i] === res1[j]+1 || los1[i] === res1[j]-1){
                los1[i] = -1;
                res1[j] = -1;
                break;
             }
        }
    }
  
  los1.map((los) => {
    if(los != -1){
      answer -= 1;
    }
  });

  return answer;
}