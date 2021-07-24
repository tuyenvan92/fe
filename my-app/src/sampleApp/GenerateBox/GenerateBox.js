import React, {useState} from 'react'

function Box({ box,toggleId }) {
    return (
       <div className='box' onClick={() => toggleId(box.id)}>
           {box.text}
       </div>
    );
}
 
function Form({ handleSubmit}) {
    const [value, setValue] = useState("");
    return (
      <div> 
        <form>
          <input
             type="text"
             value={value}
             onChange={e => setValue(e.target.value)}
          />
          <button type ="submit" onClick={event => handleSubmit(event, value)}>Generate</button>
       </form>
      </div>
    );
}



export default function GenerateBox() {
    const [boxs, setBoxs]  = useState([])

    const handleSubmit = (event, value) => {
        event.preventDefault();
        const newBoxs = [];
        for (let i = 0; i< value; i++) {
            newBoxs.push({
                id: i,
                text: `Box ${i}`
            })
        }
        setBoxs(newBoxs);
    };

    function toggleId(boxId) {
        console.log('toggleId: ',boxId)
    }

    return (
        <div>
            <Form  handleSubmit={handleSubmit} />
            <div>
                {boxs.map((box, index) => (
                    <Box key={`box-${index}`} box={box} toggleId={toggleId}/>
                ))}
            </div>
     </div>
    );
  }