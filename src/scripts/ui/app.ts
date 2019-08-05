import { generateArray, timer } from '../core/utils.js';
import { generateDiagramItemsList, swithchTwoDiagramItems, showComparingItems, hideComparingItems } from './diagram.js';
import { SortFunction, SortValue, sortMap } from '../core/sort-types.js';

const MIN_COUNT = 2;
const MAX_COUNT = 30;

const ELEMENTS = {
    numberInput: (document: Document) => document.querySelector('.js-input-number') as HTMLElement,
    sortDropdown: (document: Document) => document.querySelector('.js-sort-dropdown') as HTMLInputElement,
    sortButton: (document: Document) => document.querySelector('.js-sort-button') as HTMLElement,
    diagramChart: (document: Document) => document.querySelector('.js-diagram-chart') as HTMLElement
};

export class App {
    constructor(private document: Document) { }

    set array(value: number[]) {
        this.array = value;
    }

    get array() {
        return this.array;
    }

    start() {
        const numberInput: HTMLElement = ELEMENTS.numberInput(this.document);
        const sortButton: HTMLElement = ELEMENTS.sortButton(this.document);

        numberInput.addEventListener('change', this.onNumberChange.bind(this));
        sortButton.addEventListener('click', this.onSortClick.bind(this));
    }

    onNumberChange(event: Event) {
        const arrayItemsCount: number = (<HTMLInputElement>event.target).valueAsNumber;

        if (arrayItemsCount < MIN_COUNT) return;
        if (arrayItemsCount > MAX_COUNT) return;

        this.array = generateArray(arrayItemsCount);

        const diagramItemsList: HTMLOListElement = generateDiagramItemsList(this.array);
        const diagramChart: HTMLElement = ELEMENTS.diagramChart(this.document);

        this.renderElementWithChildren(diagramChart, [diagramItemsList]);
    }

    onSortClick() {
        const sortValue: SortValue = ELEMENTS.sortDropdown(this.document).value as SortValue;

        if (!sortValue) {
            alert('Please, select sort type.');
            return;
        }

        this.sortArray(sortValue, this.array);
    }

    async sortArray(sortValue: SortValue, array: number[]) {
        const sortFunction: SortFunction = sortMap.get(sortValue) as SortFunction;

        for (const { index1, index2, shuffleNeeded } of sortFunction(array)) {
            const item1: HTMLElement = this.document.querySelector(`li[data-order='${index1}']`) as HTMLElement;
            const item2: HTMLElement = this.document.querySelector(`li[data-order='${index2}']`) as HTMLElement;
    
            showComparingItems(item1, item2);
    
            await timer(1000);
            if (shuffleNeeded) swithchTwoDiagramItems(item1, item2);
    
            await timer(1000);
            hideComparingItems(item1, item2);
        }
    }

    renderElementWithChildren(element: HTMLElement, children: HTMLElement[]) {
        element.innerHTML = '';
        element.append(...children);
    }
}
