// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// The distance between two cells sharing a common edge is 1.

// Input: mat = [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 1, 1],
// ];
// Output: [
//   [0, 0, 0],
//   [0, 1, 0],
//   [1, 2, 1],
// ];


function updateMatrix(mat: number[][]): number[][]{

    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    function traverse(start: number[]){

    }

}



function updateMatrixOnline(mat: number[][]): number[][] {
    // queue is full of coordinates where the value is 0
    let queue: [number, number][] = [];

    // create a queue of grid locations of the 0's
    for (let x = 0; x < mat.length; x++) {
        for (let y = 0; y < mat[0].length; y++) {
            if (mat[x][y] === 0) queue.push([x, y]);
        }
    }

    // BFS from all `0`, keeping track of distance between cycles
    const directions: [number, number][] = [[-1,0],[1,0],[0,-1],[0,1]];
    // create an output array  filled with -1
    const output: number[][] = Array.from({ length: mat.length }, () => Array(mat[0].length).fill(-1));
    let queuePointer: number = 0;
    let distance: number = 0;
    // continue looping while there are cells in the queue
    while (queuePointer < queue.length) {
        const endOfCurrentCycle = queue.length; // this keeps track of current window
        // process one layer at a time, this makes it a bredth first search (only cells that are 0 away the first loop)
        while (queuePointer < endOfCurrentCycle) {
            const [x, y] = queue[queuePointer];

            // Only process if [x][y] is not processed
            if (output[x][y] === -1) {
                output[x][y] = distance;

                for (const [dx, dy] of directions) {
                    const nx = x + dx;
                    const ny = y + dy;
                    if (
                        0 <= nx &&
                        nx < mat.length &&
                        0 <= ny &&
                        ny < mat[0].length &&
                        output[nx][ny] === -1
                    ) queue.push([nx, ny]);
                }
            }

            queuePointer++;
        }

        distance++; // add distance after every cycle
    }

    return output;  
};
