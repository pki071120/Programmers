function solution(myString) {
    var answer = myString.toLowerCase().split('').map(item => {
        return item === 'a' ? item.toUpperCase() : item;
    });
    
    return answer.join('');
}
