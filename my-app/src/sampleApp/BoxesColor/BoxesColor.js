import React from 'react';
import { useState } from 'react';

const colorsDefault = ['red', 'yellow', 'aqua', 'purple']

export default function BoxesColor() {
    const [boxes, setBoxes] = useState(colorsDefault)
    const [isActive, setIsActive] = useState(true)

    const [ isClicked1, setIsClicked1 ] = useState(false)
    const [ isClicked2, setIsClicked2 ] = useState(false)
    const [ isClicked3, setIsClicked3 ] = useState(false)
    const [ isClicked4, setIsClicked4 ] = useState(false)
  
    let cssProperties = {}
    if (isClicked1) {
        cssProperties = {'--btn-bg-color-one':'red','--btn-bg-color-two':'red','--btn-bg-color-three':'red','--btn-bg-color-four':'red'}
    }  
    if (isClicked2) {
        cssProperties = {'--btn-bg-color-one':'gold','--btn-bg-color-two':'gold','--btn-bg-color-three':'gold','--btn-bg-color-four':'gold'}
    } 
    if (isClicked3) {
        cssProperties = {'--btn-bg-color-one':'aqua','--btn-bg-color-two':'aqua','--btn-bg-color-three':'aqua','--btn-bg-color-four':'aqua'}
    } 
    if (isClicked4) {
        cssProperties = {'--btn-bg-color-one':'purple','--btn-bg-color-two':'purple','--btn-bg-color-three':'purple','--btn-bg-color-four':'purple'}
    } 

    function handleChangeBgColor(color) {
        setIsActive(prevState => !prevState);
        if(!isActive) {
            const newColors = colorsDefault;
            setBoxes(newColors)
            return
        }
        const newColors = [color, color, color, color]
        setBoxes(newColors)
    }

    return (
        <div className='container' style={cssProperties}>
            <ul className="box-ul">
                {/* <li style={{ backgroundColor: 'red' }} className="box">red</li>
                <li style={{ backgroundColor: 'yellow'}} className="box">yellow</li>
                <li style={{ backgroundColor: 'aqua'}} className="box">aqua</li>
                <li style={{ backgroundColor: 'purple'}} className="box">purple</li> */}

                {boxes.map((box, idx) => (
                    <li 
                        key={box + idx} 
                        style={{ backgroundColor: box }} 
                        className="box"
                        onClick={() => handleChangeBgColor(box)}
                    >
                        {box}
                    </li>
                ))}
            </ul>
           

            {/* <div>
                <button className='btn one' onClick={() => {setIsClicked1(!isClicked1)}}>RED</button>  
                <button className='btn two' onClick={() => {setIsClicked2(!isClicked2) && setIsClicked1(!isClicked1)}}>GOLD</button>
            </div>
            <div>
                <button className='btn three' onClick={() => {setIsClicked3(!isClicked3) && setIsClicked2(!isClicked2)}}>AQUA</button>
                <button className='btn four' onClick={() => {setIsClicked4(!isClicked4) && setIsClicked3(!isClicked3)}}>PURPLE</button>
            </div> */}
        </div>
  )
}





