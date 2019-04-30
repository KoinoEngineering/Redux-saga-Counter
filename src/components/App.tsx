import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CounterActions } from '../actions';
import { State } from '../state';

// Components
export interface AppProps {
    counter: State;
    actions: any;
}
class App extends React.Component<AppProps> {
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
function mapStateToProps(state: { counter: State }) {
    return { 'counter': state.counter };
}
function mapDispatchToProps(dispatch: any) {
    return {
        'actions': bindActionCreators({ ...CounterActions }, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
