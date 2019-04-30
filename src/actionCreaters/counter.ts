import actions from "../actions/counter";
export default {
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
