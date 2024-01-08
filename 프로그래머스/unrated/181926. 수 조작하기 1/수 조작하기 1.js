function solution(n, control) {
    let i=0;
    let array=control.split('');
    array.map(item=>{
        if(item=="w")
            n+=1;
        else if(item=="s")
            n-=1;
        else if(item=="d")
            n+=10;
        else if(item=="a")
            n-=10;
    })
    return n;
}