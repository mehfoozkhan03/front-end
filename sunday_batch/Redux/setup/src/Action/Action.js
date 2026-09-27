export const Increments = { type: 'INCREMENT' };
export const Decrements = { type: 'DECREMENT' };
export const Reset = { type: 'RESET' };

// here we are dynamically pass the value in reducer function while getting the value form user.

export const incrementByValue = (value) => {
    return {
        type: 'IncrementByValue',
        payload: value,
    };
};

export const decrementByValue = (value) => {
    return {
        type: 'decrementByValue',
        payload: value,
    };
};


// other reducer action:- 

export const otherInc = { type: 'OTHER_REDUCER_INCREMENT' };
export const otherDec = { type: 'OTHER_REDUCER_DECREMENT' };
export const otherRes = { type: 'OTHER_REDUCER_RESET' };
export const otherDouble = { type: 'OTHER_REDUCER_DOUBLE' };

