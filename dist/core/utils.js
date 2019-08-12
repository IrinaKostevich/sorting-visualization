function* range(from, to) {
    for (let i = from; i <= to; i += 1) {
        yield i;
    }
}
function getRandomInRange(from, to) {
    return Math.round(Math.random() * (to - from) + from);
}
function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = 0; i < shuffledArray.length - 1; i += 1) {
        const nextIndex = getRandomInRange(i + 1, shuffledArray.length - 1);
        [shuffledArray[i], shuffledArray[nextIndex]] = [shuffledArray[nextIndex], shuffledArray[i]];
    }
    return shuffledArray;
}
export function generateArray(length) {
    const array = [...range(1, length)];
    return shuffleArray(array);
}
export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//# sourceMappingURL=utils.js.map