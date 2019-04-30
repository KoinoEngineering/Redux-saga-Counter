import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreater from '../actionCreaters/counter';
import { CounterState } from '../state/counter';

// Components
export interface CounterProps {
    counter: CounterState;
    actions: any;
}
class Counter extends React.Component<CounterProps> {
    public render() {
        const counter = this.props.counter;
        const actions = this.props.actions;
        return (
            <div>
                <h2>counter={counter.val}</h2>
                <button onClick={actions.increment}>+1</button>
                <button onClick={actions.decrement}>-1</button>
                <button onClick={actions.incrementAsync}>+1(async)</button>
            </div>
        );
    }
}

// action,state接続
function mapStateToProps(state: { counter: CounterState }) {
    return { 'counter': state.counter };
}
function mapDispatchToProps(dispatch: any) {
    return {
        'actions': bindActionCreators({ ...ActionCreater }, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
