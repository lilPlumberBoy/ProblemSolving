// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
// You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must
// take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Example 1:
// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
// Example 2:
// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have
// finished course 1. So it is impossible.

// Given our new problem, we want to find if there exist any pre-requisite cycles in our classes.
// If there is a single cycle, that means we return false since that class can't be taken, meaning
// not all of the classes can be taken.
// To detect a cycle for a given class c, we get its prerequisites (reqs) and recursively visit them.
// If during our visit, we encounter c again before we finish visiting all its prerequisites,
// it implies there's a cycle.

function detectCycle(
  course: number,
  classesNeeded: number[][],
  visited: boolean[],
) {
    const reqs = classesNeeded[course];
    if (visited[course]) return true;
    if (!reqs.length) return false;
    visited[course] = true;
    while (reqs.length) {
        // depth first search from the bottom of the req list, to see if there is a cycle
        if (detectCycle(reqs[reqs.length - 1], classesNeeded, visited))
          return true;
        reqs.pop();
    }
    // Why is the next line needed?
    visited[course] = false;
    return false;

}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  if (prerequisites.length === 0) return true;

  //   ### Why this is important
  //   Using a factory (() => []) ensures each row is a distinct array.
  //   If you wrote:
  //   const classesNeeded = Array(numCourses).fill([]);
  //   all rows would reference the same array — a classic bug.
  const classesNeeded: number[][] = Array.from(
    { length: numCourses },
    () => [],
  );
  prerequisites.forEach(([course, prereq]) => {
    classesNeeded[course].push(prereq);
  });

  const visited = Array.from({ length: numCourses }, () => false);

  for (const [course, _] of prerequisites) {
    if (detectCycle(course, classesNeeded, visited)) return false;
  }

  return true;
}
