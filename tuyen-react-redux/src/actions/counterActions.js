// ACTION TYPES
const SET_INCREMENT = 'COUNTER/SET_INCREMENT';
const SET_DECREMENT = 'COUNTER/SET_DECREMENT';

// ACTION CREATORS
function setIncrement(data) {
    return {
        type: SET_INCREMENT,
        payload: data
    }
}

const setDecrement = data => ({
    type: SET_DECREMENT,
    payload: data
})