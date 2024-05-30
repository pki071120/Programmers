function solution(n)
{
    var answer = 0;
    let length = n.toString().length;
    let num = n;

    for(let i = length-1; i>=0; i--){
        answer+=Math.floor(num/10**i);
        num=num%10**i;
    }

    return answer;
}