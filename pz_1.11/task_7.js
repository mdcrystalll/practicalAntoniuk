// create arr

let arr = [
    [1,2,-3,4,5],
    [6,7,8,-9,10],
    [11,-12,13,14,15],
    [16,17,18,-19,20],
    [21,-22,23,24,25]
];
// regenarate

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
        if (i === j){ //if elements on diagonal
            if (arr[i][j] < 0){
                arr[i][j] = 0;
            }else {
                arr[i][j] = 1;
            }
        }
    }
}

// show it

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
