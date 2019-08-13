import { generateArray, wait } from '../core/utils.js';
import { generateDiagramItemsList, swapDiagramItems, showComparingItems, hideComparingItems } from './diagram.js';
import { SortingFn, SortingType, sortMap } from '../core/sort-types.js';
import { updateElementContent } from './dom-utils.js';

const ELEMENTS = {
    numberInput: (document: Document) => document.querySelector('.js-input-number') as HTMLElement,
    sortDropdown: (document: Document) => document.querySelector('.js-sort-dropdown') as HTMLInputElement,
    sortButton: (document: Document) => document.querySelector('.js-sort-button') as HTMLElement,
    diagramChart: (document: Document) => document.querySelector('.js-diagram-chart') as HTMLElement,
    form: (document: Document) => document.querySelector('.js-form') as HTMLFormElement
};

export class App {
    private _array: number[] = [];

    constructor(private document: Document) { }

    set array(value: number[]) {
        this._array = value;
    }

    get array(): number[] {
        return this._array;
    }

    start(): void {
        const numberInput: HTMLElement = ELEMENTS.numberInput(this.document);
        const form: HTMLElement = ELEMENTS.form(this.document);

        numberInput.addEventListener('change', this.onNumberChange.bind(this));
        form.addEventListener('submit', this.onSubmit.bind(this));
    }

    checkFormValidity(): boolean {
        return ELEMENTS.form(this.document).checkValidity();
    }

    onNumberChange(event: Event): void {
        const arrayItemsCount: number = (<HTMLInputElement>event.target).valueAsNumber;

        if (!this.checkFormValidity()) return;

        this.array = generateArray(arrayItemsCount);

        const diagramItemsList: HTMLOListElement = generateDiagramItemsList(this.array);
        const diagramChart: HTMLElement = ELEMENTS.diagramChart(this.document);

        updateElementContent(diagramChart, [diagramItemsList]);
    }

    onSubmit(event: Event): void {
        event.preventDefault();

        const sortingType: SortingType = ELEMENTS.sortDropdown(this.document).value as SortingType;

        this.sortArray(sortingType, this.array);
    }

    async sortArray(sortingType: SortingType, array: number[]): Promise<void> {
        const sortFunction: SortingFn = sortMap.get(sortingType) as SortingFn;

        for (const { index1, index2, swapNeeded } of sortFunction(array)) {
            const item1: HTMLElement = this.document.querySelector(`li[data-order='${index1}']`) as HTMLElement;
            const item2: HTMLElement = this.document.querySelector(`li[data-order='${index2}']`) as HTMLElement;
    
            showComparingItems(item1, item2);
    
            await wait(1000);
            if (swapNeeded) swapDiagramItems(item1, item2);
    
            await wait(1000);
            hideComparingItems(item1, item2);
        }
    }
}
