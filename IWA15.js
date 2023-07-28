//scripts.js
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
};

// Only edit below

const [firstData] = data.lists.find(([name]) => name === 'first') || [, [1]];
const [secondData] = data.lists.find(([name]) => name === 'second') || [, [1]];
const [thirdData] = data.lists.find(([name]) => name === 'third') || [, [1]];

const extractBiggest = () => {
	if (firstData[firstData.length - 1] > secondData[secondData.length - 1]) {
		return firstData;
	}

	if (thirdData[thirdData.length - 1] < 1) {
		return secondData;
	}
	
	return thirdData;
};

// Only edit above

const result = [];

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);