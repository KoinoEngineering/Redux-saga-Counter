export const actions = {
    "INCREMENT": "INCREMENT",
    "DECREMENT": "DECREMENT",
    "INCREMENT_ASYNC": "INCREMENT_ASYNC"
};
export const CounterActions = {
    increment: () => {
        return { "type": actions.INCREMENT };
    },
    decrement: () => {
        return { "type": actions.DECREMENT };
    },
    incrementAsync: () => {
        return { "type": actions.INCREMENT_ASYNC };
    }

};
