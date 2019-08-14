import { bubbleSort } from './sort-strategies/bubble-sort.js';
import { selectionSort } from './sort-strategies/selection-sort.js';

export type SortingType = 'bubble' | 'selection';
export type SortingFn = (array: number[]) => IterableIterator<SortSwapPairIndexes>;

export interface SortSwapPairIndexes {
    index1: number;
    index2: number;
    swapNeeded: boolean;
}

export const sortMap = new Map([
    ['bubble', bubbleSort],
    ['selection', selectionSort]
]);
