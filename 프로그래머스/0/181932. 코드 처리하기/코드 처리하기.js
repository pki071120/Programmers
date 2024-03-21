function solution(code) {
    let arr = code.split("");
    let ret = ""
    let mode = false;
    arr.map((item, idx) => {
        if(!mode){
            item !== "1" ? idx % 2 == 0 ? ret += item : null : mode = !mode 
        }
        else {
            item !== "1" ? idx % 2 == 1 ? ret += item : null : mode = !mode 
        }
    })
    return ret.length > 0 ? ret : "EMPTY";
}