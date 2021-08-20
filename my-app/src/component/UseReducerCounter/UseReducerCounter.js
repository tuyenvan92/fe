import React, {useEffect, useReducer} from 'react'

const initialState = {
    counter: 0,
    isLoading: false,
    isSuccess: false,
    isDisabled: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                ...state, //copy all property object
                counter: state.counter + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state, //copy all property object
                counter: state.counter - 1
            }
        }
        case 'SET_lOADING': {
            return {
                ...state, //copy all property object
                isLoading: action.payload
            }
        }
        case 'ISET_SUCCESS': {
            return {
                ...state, //copy all property object
                isLoading: action.payload
            }
        }
        case 'PLUS_FIVE': {
            return {
                ...state, //copy all property object
                counter: state.counter + 5
            }
        }
        case 'PLUS_TEN': {
            return {
                ...state, //copy all property object
                counter: state.counter + 10
            }
        }
        case 'SET_DISABLED': {
            return {
                ...state, //copy all property object
                isLoading: action.payload
            }
        }
        default: 
            return state
    }
}

export default function UseReducerCounter() {
    const [state, dispatch] = useReducer(null, initialState)
    const {counter, isLoading, isSuccess, isDisabled} = false

    console.log(state)
    // const [counter, setCounter] = React.useState(0);
    // const [isLoading, setIsLoading] = React.useState(false);
    // const [isSuccess, setIsSuccess] = React.useState(false);
    // const [isDisabled,setIsDisabled] = React.useState(false);

    useEffect(() => {
        if (counter>50) {
            // setIsSuccess(true);
            // setIsDisabled(true);
            dispatch({
                type: 'SET_SUCCESS', //required
                payload: true //optional
            })
            dispatch({
                type: 'SET_DISABLED', //required
                payload: true //optional
            })
        }
    }, [counter])

    function increment() {
        // setIsLoading(true);
        // setCounter(prevState => prevState + 1)
        dispatch({
            type: 'SET_LOADING', //required
            payload: true //optional
        })
        dispatch({
            type: 'INCREMENT', // required
        })
        setTimeout(() => {
            // setIsLoading(false)
            dispatch({
                type: 'SET_LOADING', // required
                payload: false
            })
        },500);
    }

    function decrement() {
        // setCounter(prevState => prevState - 1)
        // setTimeout(() => {
        //     setIsLoading(false)
        // },500);
        dispatch({
            type: 'SET_LOADING', //required
            payload: true //optional
        })
        dispatch({
            type: 'DECREMENT', // required
        })
        setTimeout(() => {
            // setIsLoading(false)
            dispatch({
                type: 'SET_LOADING', // required
                payload: false // optional
            })
        },500);
    }

    function setPlusFive() {
        // setCounter(prevState => prevState + 5)
        // setTimeout(() => {
        //     setIsLoading(false)
        // },500);
        dispatch({
            type: 'SET_LOADING', //required
            payload: true // optional
        })
        dispatch({
            type: 'PLUS_FIVE', // required
        })
        setTimeout(() => {
            dispatch({
                type: 'SET_LOADING', //required
                payload: false // optional
            })
        }, 500)
    }

    function setPlusTen() {
        // setCounter(prevState => prevState + 10)
        // setTimeout(() => {
        //     setIsLoading(false)
        // },500);
        dispatch({
            type: 'SET_LOADING', //required
            payload: true // optional
        })
        dispatch({
            type: 'PLUS_TEN', // required
        })
        setTimeout(() => {
            dispatch({
                type: 'SET_LOADING', //required
                payload: false // optional
            })
        }, 500)
    }

    function resetCounter() {
        // setIsLoading(true)
        // setCounter(0)
        // setIsDisabled(false)
        // setIsSuccess(false)
        dispatch({
            type: 'SET_LOADING', // required
            payload: true
        })
        dispatch({
            type: 'RESET_COUNTER', //required
            payload: true // optional
        })
        dispatch({
            type: 'SET_DISABLED', //required
            payload: FALSE // optional
        })
        dispatch({
            type: 'SET_SUCCESS', //required
            payload: FALSE // optional
        })
        setTimeout(() => {
            // setIsLoading(false)
            dispatch({
                type: 'set_LOADING', //required
                payload: true // optional
            })
        },500);
    }

    return (
        <div>
            Click on time: {isLoading ? <div>...loading</div> : counter} 
            {isSuccess && <span>Congratulation</span>}
            <br/>
            <br/>
            <button type="button" disable={isDisabled} onClick={increment}>Increment</button>
            <button type="button" disable={isDisabled} onClick={decrement}>Decrement</button>
            <button type="button" disable={isDisabled} onClick={setPlusFive}>set + 5</button>
            <button type="button" disable={isDisabled} onClick={setPlusTen}>set + 10</button>
            <button type="button" onClick={resetCounter}>Reset</button>
        </div>
    )
}