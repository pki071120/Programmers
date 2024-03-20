function solution(n, m, section) {
  let index = 0;
  let total = 0;
  let count = 0;
  section.map(item => {
    if(total <= section[index]){
      total = section[index] + m;
      count++;
    }
    index++;
  })
  return count;
}