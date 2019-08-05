import { bubbleSort } from './sort-strategies/bubble-sort.js';
import { selectionSort } from './sort-strategies/selection-sort.js';

export type SortValue = 'bubble' | 'selection';
export type SortFunction = (array: number[]) => IterableIterator<SortSwapPairIndexes>;

export interface SortSwapPairIndexes {
    index1: number;
    index2: number;
    shuffleNeeded: boolean;
}

export const sortMap = new Map([
    ['bubble', bubbleSort],
    ['selection', selectionSort]
]);
