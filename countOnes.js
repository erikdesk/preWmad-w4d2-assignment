// Create a function to count the number of 1s in a 2D array.

const countOnes = function (nestedArr) {
    
    let count = 0;
    
	for (let i = 0; i < nestedArr.length; i++) {
	    for (let j = 0; j < nestedArr[i].length; j++) {
	        if (nestedArr[i][j] === 1) {
	        	count++;
	        }
	    }
	}

    return count;
}



console.log(countOnes([
    [1, 0],
    [0, 0]
]));

// should return 1

console.log(countOnes([
    [1, 1, 1],
    [0, 0, 1],
    [1, 1, 1]
]));

// should return 7

console.log(countOnes([
    [1, 2, 3],
    [0, 2, 1],
    [5, 7, 33]
]));

//should return 2
