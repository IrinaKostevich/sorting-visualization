const CLASS_ITEM_UP: string = 'diagram-item--up';

export function generateDiagramItemsList(array: number[]): HTMLOListElement {
    const diagramItemsList: HTMLOListElement = document.createElement('ol');
    diagramItemsList.classList.add('diagram');

    const items: string[] = array.map((value, index) => {
        return `<li class="diagram-item" data-order="${index}">
                    <div class="diagram-item-pipe" data-value="${value}" style="height: ${value * 10}px"></div>
                    <div class="diagram-item-value">${value}</div>
                </li>`;
    });

    diagramItemsList.innerHTML = items.join('\n');

    return diagramItemsList;
}

function moveItemUp(item: HTMLElement): void {
    item.classList.add(CLASS_ITEM_UP);
}

function moveItemToBase(item: HTMLElement): void {
    item.classList.remove(CLASS_ITEM_UP);
}

export function showComparingItems(item1: HTMLElement, item2: HTMLElement): void {
    moveItemUp(item1);
    moveItemUp(item2);
}

export function hideComparingItems(item1: HTMLElement, item2: HTMLElement): void {
    moveItemToBase(item1);
    moveItemToBase(item2);
}

export function swapDiagramItems(item1: HTMLElement, item2: HTMLElement): void {
    [item1.innerHTML, item2.innerHTML] = [item2.innerHTML, item1.innerHTML];
}
