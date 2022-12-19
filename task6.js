let arr = [9, 1, 2,  3, 4, 5, 6, 1, 7, 4, 9, 10, 3, 5];
let dublicate = new Set(arr).size !== arr.length;
 
if (dublicate) {
    console.log(true);
}
else {
    console.log(false);
}