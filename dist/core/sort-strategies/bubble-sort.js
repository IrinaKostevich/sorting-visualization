export const bubbleSort = function* (array) {
    const shuffledArray = [...array];
    for (let j = 0; j < shuffledArray.length; j += 1) {
        for (let i = 0; i < shuffledArray.length - j - 1; i += 1) {
            let swapNeeded = false;
            if (shuffledArray[i] > shuffledArray[i + 1]) {
                [shuffledArray[i], shuffledArray[i + 1]] = [shuffledArray[i + 1], shuffledArray[i]];
                swapNeeded = true;
            }
            yield { index1: i, index2: i + 1, swapNeeded };
        }
    }
};
//# sourceMappingURL=bubble-sort.js.map