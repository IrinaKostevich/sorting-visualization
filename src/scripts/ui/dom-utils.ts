export function updateElementContent(element: HTMLElement, children: HTMLElement[]): void {
    element.innerHTML = '';
    element.append(...children);
}
