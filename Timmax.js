let arr = [13, 4, 7, 23, 67, 225, -5, 532, 676, -321, 5, 35];
let e = "<hr/>";
for (i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
        e += arr[i] + ", ";
    } else {
        e += arr[i];
    }
}
document.getElementById('mang').innerHTML = e;
function Timmax() {
    let max = arr[0];
    for (j = 0; j < arr.length; j++) {
        if (max < arr[j]) {
            max = arr[j];
        }
        document.getElementById('show').innerHTML = "Phan tu lon nhat trong chuoi la " + max;
    }
}