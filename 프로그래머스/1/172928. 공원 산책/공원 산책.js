function solution(park, routes) {
    var answer = [];
    let parkR = park.map(item => {
        return item.split("");
    })
    let start = []
    outerLoop:
    for(let i = 0; i < parkR.length; i++){
        let arr = parkR[i];
        for(let j = 0; j<arr.length; j++){
            if(arr[j] == "S"){
                start.push(i);
                start.push(j);
                break outerLoop;
            }
        }
    }
    let wp = start[1];
    let hp = start[0];
    let w = parkR[0].length-1;
    let h = parkR.length-1;
    let counter = 1;
    routes.map((item) => {
        let ra = item.split(" ");
        if (ra[0] === 'E' && wp + parseInt(ra[1]) <= w) {
            for (let i = 1; i <= parseInt(ra[1]); i++) {
                if (parkR[hp][wp + i] === "X") return false;
            }
            wp += parseInt(ra[1]);
        } else if (ra[0] === 'W' && wp - parseInt(ra[1]) >= 0) {
            for (let i = 1; i <= parseInt(ra[1]); i++) {
                if (parkR[hp][wp - i] === "X") return false;
            }
            wp -= parseInt(ra[1]);
        } else if (ra[0] === 'S' && hp + parseInt(ra[1]) <= h) {
            for (let i = 1; i <= parseInt(ra[1]); i++) {
                if (parkR[hp + i][wp] === "X") return false;
            }
            hp += parseInt(ra[1]);
        } else if (ra[0] === 'N' && hp - parseInt(ra[1]) >= 0) {
            for (let i = 1; i <= parseInt(ra[1]); i++) {
                if (parkR[hp - i][wp] === "X") return false;
            }
            hp -= parseInt(ra[1]);
        }
    })
    answer.push(hp, wp);
    return answer;
}