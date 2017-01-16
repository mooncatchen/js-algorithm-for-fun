function quickSort(list, start, end) {
	if (start >= end) {
		return;
    }
    console.log(list)
	let idx = start;
	for (let i=start;i<end;i++) {
		if (list[i]<=list[end]) {
			swap(list, idx, i);
			idx += 1;
        }
    }
	swap(list, idx, end);
	quickSort(list, start, idx - 1);
	quickSort(list, idx + 1, end);
}

function swap(list, idx1, idx2) {
	var tmp = list[idx1];
	list[idx1] = list[idx2];
	list[idx2] = tmp;
}

function sort (list) {
	if (!list || list.length<=1) {
		return list;
	}

    quickSort(list, 0, list.length - 1);

    return list;
};

console.log(sort([22, 44, 3, 23, 55, 4, 1, 2, 33, 55]))
module.exports = sort

