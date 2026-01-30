// You are given an image represented by an m x n grid of integers image, where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and color. Your task is to perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill:

// Begin with the starting pixel and change its color to color.
// Perform the same process for each pixel that is directly adjacent (pixels that share a side with the original pixel,
// either horizontally or vertically) and shares the same color as the starting pixel.
// Keep repeating this process by checking neighboring pixels of the updated pixels and modifying their color if it matches
// the original color of the starting pixel.
// The process stops when there are no more adjacent pixels of the original color to update.
// Return the modified image after performing the flood fill.
// Example 1:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation:
// From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not horizontally or vertically connected to the starting pixel.
// Example 2:
// Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
// Output: [[0,0,0],[0,0,0]]
// Explanation:
// The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.

function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
    // save the color we are filling
    const originalColor = image[sr][sc];
    if (originalColor == color) return image;
    // allowed directions of movement
    const directions = [[-1,0],[1,0],[0,-1],[0,1]]
    main(sr,sc);
    return image;

    function main(r: number, c: number ){
        // check that tile is the same color as the origin of the fill
        if (image[r][c] !== originalColor) return;

        // change current tile
        image[r][c] = color;

        for (const [dr, dc] of directions) {
            // recursive go each direction to fill
            // row choice
            const nr = r + dr;
            // column choice
            const nc = c + dc;
            // only go to valid locations
            if (0 <= nr && nr < image.length && 0 <= nc && nc < image[0].length){
                // DFS, go through every neighbor and fill if the originalColor
                main(nr, nc)
            }
        }
    }
}

function dfs(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  main(sr, sc);
  return image;
  function main(r: number, c: number) {
    if (image[r][c] !== originalColor) return;
    image[r][c] = color;
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (0 <= nr && nr < image.length && 0 <= nc && nc < image[0].length)
        main(nr, nc);
    }
  }
}


function bfs(
  image: number[][],
  sr: number,
  sc: number,
  color: number,
): number[][] {
  const originalColor = image[sr][sc];
  if (originalColor === color) return image;
  const queue: [number, number][] = [[sr, sc]];
  let queuePointer: number = 0;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  while (queuePointer < queue.length) {
    const [r, c] = queue[queuePointer];
    if (image[r][c] === originalColor) {
      image[r][c] = color;

      for (const [dr, dc] of directions) {
        const nr = r + dr;
        const nc = c + dc;
        if (0 <= nr && nr < image.length && 0 <= nc && nc < image[0].length)
          queue.push([nr, nc]);
      }
    }
    queuePointer++;
  }

  return image;
}
