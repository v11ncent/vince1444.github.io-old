const array = [12, 10, 15, 11, 14, 13, 16];

function sortAscending(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

sortAscending(array);
console.log(array);
