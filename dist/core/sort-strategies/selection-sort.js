export const selectionSort = function* (array) {
    const sortedArray = [...array];
    for (let j = 0; j < sortedArray.length - 1; j += 1) {
        let minIndex = j;
        let swapNeeded = false;
        for (let i = j + 1; i < sortedArray.length; i += 1) {
            if (sortedArray[i] < sortedArray[minIndex]) {
                minIndex = i;
            }
        }
        if (minIndex !== j) {
            [sortedArray[j], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[j]];
            swapNeeded = true;
        }
        yield { index1: j, index2: minIndex, swapNeeded };
    }
};
//# sourceMappingURL=selection-sort.js.map