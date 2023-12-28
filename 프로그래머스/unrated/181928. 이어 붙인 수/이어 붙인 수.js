    function solution(num_list) {
      let odd = []
      let even = []
      for(i=0;i<num_list.length;i++){
        if(num_list[i]%2!=0)
          odd.push(num_list[i]);
        else even.push(num_list[i]);
      }
      let num1=odd.join('');
      let num2=even.join('');
      return Number(num1)+Number(num2);
    }