function increment() {
    return { 'type': actions.INCREMENT };
}
function decrement() {
    return { 'type': actions.DECREMENT };
}
export const actions = {
    'INCREMENT': 'INCREMENT',
    'DECREMENT': 'DECREMENT'
};
export const CounterActions = { increment, decrement };
