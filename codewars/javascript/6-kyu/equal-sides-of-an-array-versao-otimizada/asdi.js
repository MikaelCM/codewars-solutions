// Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr) {
    let totalSum = arr.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        
        if (leftSum === totalSum - leftSum - arr[i]) {
            return i;
        }

        leftSum += arr[i];
    }

    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))