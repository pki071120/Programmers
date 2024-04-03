function solution(wallpaper) {
    var location = [];
    let answer = [];
    for(let i = 0; i < wallpaper.length; i++){
        let arr = wallpaper[i].split("");
        for(let j = 0; j < arr.length; j++){
            if(arr[j] === "#"){
                let FL = [i,j]
                location.push(FL);
            }
        }
    }
    
    let xmin = wallpaper.length;
    let ymin = wallpaper[0].length;
    let xmax = 0;
    let ymax = 0;
    
    for(let i = 0; i < location.length; i++){
        xmin > location[i][0] ? xmin = location[i][0] : null;
        ymin > location[i][1] ? ymin = location[i][1] : null;
        xmax < location[i][0]+1 ? xmax = location[i][0]+1 : null;
        ymax < location[i][1]+1 ? ymax = location[i][1]+1 : null;
    }
    
    answer.push(xmin,ymin,xmax,ymax);
    
    return answer;
}