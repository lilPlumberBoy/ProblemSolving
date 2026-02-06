// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).
// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).
// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

function kClosest(points: number[][], k: number): number[][] {
    // sort function expects a comparison function, it should return a negative number if a
    // should come before b, and positive if a should come after b, or 0 if they are equal
    // a and b are two points in the array
    return points.sort((a, b) => {
        // for each point we calculate euclidian distance 
        let getDistance = (point) => Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2));
        // if a has a greater distance we return a positive number, meaning b should come first in the sort
        return getDistance(a) - getDistance(b);
    }).slice(0,k);
};