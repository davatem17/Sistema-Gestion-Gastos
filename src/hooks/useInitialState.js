import { useState } from "react";

const initialState = {
    token: {}
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToEq = (payload) => {
        setState({
            ...state,
            accessToken: {...state.accessToken, payload},
        });
    }
    
    return {
        state,
        addToEq
    }
}

export default useInitialState;