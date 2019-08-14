function* range(from: number, to: number): IterableIterator<number> {
    for (let i = from; i <= to; i += 1) {
        yield i;
    }
}

function getRandomInRange(from: number, to: number): number {
    return Math.round(Math.random() * (to - from) + from);
}

function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray: any[] = [...array];

    for (let i: number = 0; i < shuffledArray.length - 1; i += 1) {
        const nextIndex: number = getRandomInRange(i + 1, shuffledArray.length - 1);
        [shuffledArray[i], shuffledArray[nextIndex]] = [shuffledArray[nextIndex], shuffledArray[i]];
    }

    return shuffledArray;
}

export function generateArray(length: number): number[] {
    const array: number[] = [...range(1, length)];

    return shuffleArray(array);
}

export function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
