function InsertionSort(arr){
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}

arr1=[1,11,4,6,3,7];
arr2=[6,3,2,8,5,1,4,7];

console.log("Сортування масиву", arr1, ":");
let ar= InsertionSort(arr1);
console.log(ar);

console.log("Сортування масиву", arr2, ":");
ar=InsertionSort(arr2);
console.log(ar);