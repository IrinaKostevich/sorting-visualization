import { SortSwapPairIndexes } from '../sort-types.js';

export function* bubbleSort(array: number[]): IterableIterator<SortSwapPairIndexes> {
    const shuffledArray: number[] = [...array];
    let shuffleNeeded: boolean;

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
