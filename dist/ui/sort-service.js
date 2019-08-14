var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bubbleSort } from './sort-strategies/bubble-sort.js';
export function sortArray(sortValue, array) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const { index1, index2, shuffle } of bubbleSort(array)) {
            const item1 = this.document.querySelector(`li[data-order="${index1}"]`);
            const item2 = this.document.querySelector(`li[data-order="${index2}"]`);
            showComparingItems(item1, item2);
            yield timer(1000);
            if (shuffle)
                swithchTwoDiagramItems(item1, item2);
            yield timer(1000);
            hideComparingItems(item1, item2);
        }
    });
}
//# sourceMappingURL=sort-service.js.map