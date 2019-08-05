var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateArray, timer } from '../core/utils.js';
import { generateDiagramItemsList, swithchTwoDiagramItems, showComparingItems, hideComparingItems } from './diagram.js';
import { sortMap } from '../core/sort-types.js';
const MIN_COUNT = 2;
const MAX_COUNT = 30;
const ELEMENTS = {
    numberInput: (document) => document.querySelector('.js-input-number'),
    sortDropdown: (document) => document.querySelector('.js-sort-dropdown'),
    sortButton: (document) => document.querySelector('.js-sort-button'),
    diagramChart: (document) => document.querySelector('.js-diagram-chart')
};
export class App {
    constructor(document) {
        this.document = document;
    }
    set array(value) {
        this.array = value;
    }
    get array() {
        return this.array;
    }
    start() {
        const numberInput = ELEMENTS.numberInput(this.document);
        const sortButton = ELEMENTS.sortButton(this.document);
        numberInput.addEventListener('change', this.onNumberChange.bind(this));
        sortButton.addEventListener('click', this.onSortClick.bind(this));
    }
    onNumberChange(event) {
        const arrayItemsCount = event.target.valueAsNumber;
        if (arrayItemsCount < MIN_COUNT)
            return;
        if (arrayItemsCount > MAX_COUNT)
            return;
        this.array = generateArray(arrayItemsCount);
        const diagramItemsList = generateDiagramItemsList(this.array);
        const diagramChart = ELEMENTS.diagramChart(this.document);
        this.renderElementWithChildren(diagramChart, [diagramItemsList]);
    }
    onSortClick() {
        const sortValue = ELEMENTS.sortDropdown(this.document).value;
        if (!sortValue) {
            alert('Please, select sort type.');
            return;
        }
        this.sortArray(sortValue, this.array);
    }
    sortArray(sortValue, array) {
        return __awaiter(this, void 0, void 0, function* () {
            const sortFunction = sortMap.get(sortValue);
            for (const { index1, index2, shuffleNeeded } of sortFunction(array)) {
                const item1 = this.document.querySelector(`li[data-order='${index1}']`);
                const item2 = this.document.querySelector(`li[data-order='${index2}']`);
                showComparingItems(item1, item2);
                yield timer(1000);
                if (shuffleNeeded)
                    swithchTwoDiagramItems(item1, item2);
                yield timer(1000);
                hideComparingItems(item1, item2);
            }
        });
    }
    renderElementWithChildren(element, children) {
        element.innerHTML = '';
        element.append(...children);
    }
}
//# sourceMappingURL=app.js.map