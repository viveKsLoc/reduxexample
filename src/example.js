import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component {
    render() {

        // Step 2: Reducer: State and Action
        const reducer = function(state, action) {
            if(action.type === 'ATTACK') {
                return action.payload
            }
            if(action.type === 'GREENATTACK') {
                return action.payload
            }
            return state;
        }

        // Step 1: Store: Reducer and State
        // createStore(reducer, currentState)
        const store = createStore(reducer, 'Peace');

        // Step 3: Subscribe
        store.subscribe(() => {
            console.log('Store is now ', store.getState());
        });

        // Step 4: Dispatch the Action
        store.dispatch({type: 'ATTACK', payload: 'Iron Man'});
        store.dispatch({type: 'GREENATTACK', payload: 'Hulk'});

        retrun (
            <div>
                Test Redux
            </div>
        )

    }
}

export default ReduxDemo;