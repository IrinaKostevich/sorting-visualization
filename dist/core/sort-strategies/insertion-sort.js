export function insertionSort(array) {
    const sortedArray = [...array];
    for (let j = 1; j < sortedArray.length; j += 1) {
        const currentItem = sortedArray[j];
        for (let i = j - 1; i >= 0; i -= 1) {
            if (sortedArray[i] > currentItem) {
                sortedArray[i + 1] = sortedArray[i];
            }
            else {
                sortedArray[i + 1] = currentItem;
                break;
            }
        }
        if (currentItem < sortedArray[0]) {
            sortedArray[0] = currentItem;
        }
    }
    return sortedArray;
}
//# sourceMappingURL=insertion-sort.js.map