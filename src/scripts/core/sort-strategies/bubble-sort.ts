import { SortSwapPairIndexes, SortingFn } from '../sort-types.js';

export const bubbleSort: SortingFn = function* (array: number[]): IterableIterator<SortSwapPairIndexes> {
    const shuffledArray: number[] = [...array];

    for (let j: number = 0; j < shuffledArray.length; j += 1) {
        for (let i: number = 0; i < shuffledArray.length - j - 1; i += 1) {
            let swapNeeded: boolean = false;

            if (shuffledArray[i] > shuffledArray[i + 1]) {
                [shuffledArray[i], shuffledArray[i + 1]] = [shuffledArray[i + 1], shuffledArray[i]];
                swapNeeded = true;
            }

            yield { index1: i, index2: i + 1, swapNeeded };
        }
    }
}
