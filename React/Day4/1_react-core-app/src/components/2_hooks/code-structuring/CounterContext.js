import { useContext } from "react";
import { createContext } from "react";
import { counterActions } from "./CounterActions";
import { useReducer } from "react";

const counterState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case counterActions.increment:
            return { count: state.count + action.payload };
        case counterActions.decrement:
            return { count: state.count - action.payload };
        default:
            throw new Error();
    }
}

const CounterContext = createContext();

export function useCounter() {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error(`useCounter must be used within a CounterProvider`);
    }
    return context;
}

export function CounterProvider({children}) {
    const [state, dispatch] = useReducer(counterReducer, counterState);

    const providerValue = { counterState: state, counterDispatch: dispatch };

    return (
        <CounterContext.Provider value={providerValue}>
            {children}
        </CounterContext.Provider>
    );
}