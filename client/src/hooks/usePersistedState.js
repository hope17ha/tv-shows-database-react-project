import { useState } from "react";

export default function usePersistedState(stateKey, initalState) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(stateKey);
        if (!persistedState || persistedState === 'undefined') {
            return typeof initalState === 'function' 
                ? initalState() 
                : initalState;
        }

        try {
            return JSON.parse(persistedState);
        } catch {
            return typeof initalState === 'function'
                ? initalState()
                : initalState;
        }
    });

    const setPersistedState = (input) => {
        const data = typeof input === 'function' 
            ? input(state) 
            : input;

       if (data === undefined) {
            localStorage.removeItem(stateKey);
            setState(data);
            return;
        }

        localStorage.setItem(stateKey, JSON.stringify(data));
        setState(data);
    };

    return [
        state,
        setPersistedState,
    ]
}
