export function* selectionSort(array) {
    const sortedArray = [...array];
    let shuffleNeeded;
    for (let j = 0; j < sortedArray.length - 1; j += 1) {
        let minIndex = j;
        shuffleNeeded = false;
        for (let i = j + 1; i < sortedArray.length; i += 1) {
            if (sortedArray[i] < sortedArray[minIndex]) {
                minIndex = i;
            }
        }
        if (minIndex !== j) {
            [sortedArray[j], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[j]];
            shuffleNeeded = true;
        }
        yield { index1: j, index2: minIndex, shuffleNeeded };
    }
}
//# sourceMappingURL=selection-sort.js.map