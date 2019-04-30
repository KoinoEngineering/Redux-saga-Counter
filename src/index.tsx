import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Action, applyMiddleware, bindActionCreators, combineReducers, createStore, DeepPartial } from 'redux';
import logger from 'redux-logger';

// State
type State = DeepPartial<{ val: number }>;
const initialState: State = { 'val': 0 };
// Actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
function increment() {
  return { 'type': INCREMENT };
}
function decrement() {
  return { 'type': DECREMENT };
}
const CounterActions = { increment, decrement };

// Reducer
function counter(state = initialState, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return { 'val': state.val === undefined ? 0 : state.val + 1 };
    case DECREMENT:
      return { 'val': state.val === undefined ? 0 : state.val - 1 };
    default:
      return state;
  }
}

// RootReducer
const rootReducer = combineReducers({
  counter
});

// Components
interface AppProps {
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
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// Store作成
function configureStore(preloadedState = { 'counter': initialState }) {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(logger));
  return store;
}

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
