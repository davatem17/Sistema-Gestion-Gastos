import { useState } from "react";

const initialState = {
    userId: {}
}

const useId = () => {
    const [state, setState] = useState(initialState);

    const addUserId = (payload) => {
        setState({
            ...state,
            userId: {...state.userId, payload},
        });
    }

    return {
        state,
        addUserId
    }
}

export default useId;