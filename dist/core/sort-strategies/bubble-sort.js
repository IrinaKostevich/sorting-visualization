export function* bubbleSort(array) {
    const shuffledArray = [...array];
    let shuffleNeeded;
    for (let j = 0; j < shuffledArray.length; j += 1) {
        for (let i = 0; i < shuffledArray.length - j - 1; i += 1) {
            shuffleNeeded = false;
            if (shuffledArray[i] > shuffledArray[i + 1]) {
                [shuffledArray[i], shuffledArray[i + 1]] = [shuffledArray[i + 1], shuffledArray[i]];
                shuffleNeeded = true;
            }
            yield { index1: i, index2: i + 1, shuffleNeeded };
        }
    }
}
//# sourceMappingURL=bubble-sort.js.map