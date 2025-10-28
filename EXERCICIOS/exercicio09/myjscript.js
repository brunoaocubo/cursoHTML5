function FindAverageOfPositives(arr){
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0)
        {
            sum += arr[i];
            count++;   
        }
    }

    if(count === 0)
    {
        return 0;
    }

    return sum / count;
}

let arr = [2,-5,6,-3,8];
console.log("Média dos números positivos: " + FindAverageOfPositives(arr));