import React, {useState} from 'react'

function Box() {
    return (
       <div className = 'box'>
           Box
       </div>
    );
}
export default function GenerateBox() {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addTodo();
        setValue("");
    };
    
    function Form() {
        return (
          <div>
            <form>
              <input
                 value={value}
                 onChange={e => setValue(e.target.value)}
              />
              <button type ="submit" onClick={handleSubmit}>Generate</button>
           </form>
          </div>
        );
    }
    let newValue = parseInt(value)
    const [todos, setTodos] = useState([]);
     const addTodo = text => {
        const newTodos = [...todos, { text }];
        for (let i=1; i<newValue; i++) {
            newTodos.push({text})
        }
        setTodos(newTodos);
     };
 
    return (
        <div>
            <Form/>
            <div>
                {todos.map((todo, index) => (
                    <Box key={index} todo={todo}/>
                ))}
            </div>
     </div>
    );
  }