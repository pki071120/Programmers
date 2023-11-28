function solution(n) {
    let i;
    let sum=0;
    if(n%2==1){
        for(i=1;i<=n;i++){
            if(i%2==1){
                sum+=i;
            }
        }
        return sum;
    }
    else{
        for(i=1;i<=n;i++){
            if(i%2==0){
                sum=sum+i*i;
            }
        }
        return sum
    }
}