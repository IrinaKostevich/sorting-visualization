var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generateArray, wait } from '../core/utils.js';
import { generateDiagramItemsList, swapDiagramItems, showComparingItems, hideComparingItems } from './diagram.js';
import { sortMap } from '../core/sort-types.js';
import { updateElementContent } from './dom-utils.js';
const ELEMENTS = {
    numberInput: (document) => document.querySelector('.js-input-number'),
    sortDropdown: (document) => document.querySelector('.js-sort-dropdown'),
    sortButton: (document) => document.querySelector('.js-sort-button'),
    diagramChart: (document) => document.querySelector('.js-diagram-chart'),
    form: (document) => document.querySelector('.js-form')
};
export class App {
    constructor(document) {
        this.document = document;
        this._array = [];
    }
    set array(value) {
        this._array = value;
    }
    get array() {
        return this._array;
    }
    start() {
        const numberInput = ELEMENTS.numberInput(this.document);
        const form = ELEMENTS.form(this.document);
        numberInput.addEventListener('change', this.onNumberChange.bind(this));
        form.addEventListener('submit', this.onSubmit.bind(this));
    }
    checkFormValidity() {
        return ELEMENTS.form(this.document).checkValidity();
    }
    onNumberChange(event) {
        const arrayItemsCount = event.target.valueAsNumber;
        if (!this.checkFormValidity())
            return;
        this.array = generateArray(arrayItemsCount);
        const diagramItemsList = generateDiagramItemsList(this.array);
        const diagramChart = ELEMENTS.diagramChart(this.document);
        updateElementContent(diagramChart, [diagramItemsList]);
    }
    onSubmit(event) {
        event.preventDefault();
        const sortingType = ELEMENTS.sortDropdown(this.document).value;
        this.sortArray(sortingType, this.array);
    }
    sortArray(sortingType, array) {
        return __awaiter(this, void 0, void 0, function* () {
            const sortFunction = sortMap.get(sortingType);
            for (const { index1, index2, swapNeeded } of sortFunction(array)) {
                const item1 = this.document.querySelector(`li[data-order='${index1}']`);
                const item2 = this.document.querySelector(`li[data-order='${index2}']`);
                showComparingItems(item1, item2);
                yield wait(1000);
                if (swapNeeded)
                    swapDiagramItems(item1, item2);
                yield wait(1000);
                hideComparingItems(item1, item2);
            }
        });
    }
}
//# sourceMappingURL=app.js.map