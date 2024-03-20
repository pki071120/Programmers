function solution(order) {
    let answer = 0;
    const americanPrice = 4500;
    const cafeLattePrice = 5000;
    
    for(let i = 0; i < order.length; i++) {
        if(order[i].includes("americano") === true) {
            answer += americanPrice;
        } else if(order[i].includes("cafelatte") === true) {
            answer += cafeLattePrice;
        } else {
            answer += americanPrice;
        }
    }
    
    return answer;
}
