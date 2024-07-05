// 1. function calculating squareroots of array of numbers it takes as arguments.
function squareRoots(ns) {
	// map method creates a new array with the squareroots
	const roots = ns.map((num) => Math.sqrt(num));
	// forEach method iterates through the roots of the matching numbers in ns; prints each original number and its square root
	roots.forEach((root, index) => {
		console.log(`${ns[index]}: ${root}`);
	});
	return roots;
}

const testNumbers = [9, 25, 36, 81, 49];
const testRoots = squareRoots(testNumbers);
