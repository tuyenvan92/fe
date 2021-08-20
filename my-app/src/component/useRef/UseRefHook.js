import React, {useEffect, useRef, useState} from 'react';

export default function UseRefHook() {
    //given
    const titleRef = useRef()
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState('truong')
    const isFlag = useRef(false)

    // when
    function handleEdit() {
        setIsEdit(true)
    }

    useEffect(() => {
        // console.log('out useEffect titleRef: ', titleRef.current)
        if (!isEdit) return;
        titleRef.current.focus()
        titleRef.current.setSelectionRange(0, titleRef.current.value.length)
    },[isEdit])

    useEffect(() => {
        if(!isFlag.current) {
        isFlag.current = true;
        return;
    }
        console.log('run useEffect next re-rendering')
    },[isEdit])

    // function handleFocus() {
    //     setTimeout(() => {
    //         titleRef.current.focus()
    //         titleRef.current.setSelecionRange(0, titleRef.current.value.length)
    //     }, 50)
    // }

    function onChangeName(event) {
        const {value} = event.target;
        setName(value)
    }
    function handleSubmit() {
        setIsEdit(false);
    }

    return (
        <div>
            Title: {!isEdit && name}
            {/* <input ref={titleRef} type="text" name = "title"/> */}
            {isEdit && (
                <input 
                ref={titleRef}
                defaultValue={name}
                type="text"
                onChange={onChangeName}
                />
            )}
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}
