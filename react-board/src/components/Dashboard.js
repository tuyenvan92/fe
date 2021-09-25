import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);


export default function Dashboard() {
    const [todos, setTodos] = useState([])
    const [forms, setForms] = useState({
        id:'',
        description:'',
        status:''
    })
    
    function onChange(event) {
        setForms({
            ...forms,
            [event.target.name]:event.target.value
        })
    }

    

    // fetch Todos
    const fetchTodos =  async () => {
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
            method:'GET',
        })
        const data = await res.json();  
        //console.log(data.data)
        return setTodos(data.data);
    }   

    useEffect(() => {      
        fetchTodos();
    },[])
    
    // add Todos
    async function addTodos() {
        const newTodos = {
            id: Date.now().toString(),
            description: forms.description,
            status: forms.status,
            state: "open",
            title: "Learn React",
            author: "Tony Nguyen"
        }
        //console.log("newTodooooooos", newTodos)
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodos)
        })
        const data = await res.json(); 
        setTodos([...todos, data])
        fetchTodos(todos);
    }

    // delete Todos
    async function deleteTodos(todoId) {
        await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        const newSetTodos = todos.filter((item) => item.id !== todoId);
        fetchTodos(newSetTodos);
    }

    
    // change Todos' state from open to closed
    async function changeState(todoId) {
        await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'state': "closed"})
        })
        fetchTodos(todos);   
    }
    
    // filter All - Open - Closed
    function filterOpen() {
        const setOpen = todos.filter((item) => item.state === "open")
        console.log("opennnn",setOpen);
        fetchTodos(setOpen);
    }
    function filterClosed() {
        const setClosed = todos.filter((item) => item.state === "closed")
        console.log("closedddddd",setClosed);
        fetchTodos(setClosed);
    }
    function filterAll() {
        console.log("Alllllllll", todos);
        fetchTodos(todos);
    }

    // sort by name
    function sortByName(event) {
        console.log("Option valueeee", event)
        const newTodos = todos.sort(function (a,b) {
            const nameA = a.description.toLowerCase();
            const nameB = b.description.toLowerCase();
            if (event === 'ASC' && nameA < nameB) {
                return -1;
            } if (event === 'DESC' && nameA > nameB) {
                return -1;
            } else {
                return 0;
            }
        })
        console.log('newTodos in sort by name', newTodos)
        fetchTodos(newTodos)
    }

    // search by description
    function searchByDes(event) {
        console.log('search by description', event)
        const newTodos = todos.filter((data) => {
            return data.description.search(event) !== -1
        })
        console.log('newTodos in search by description', newTodos)
        fetchTodos(newTodos)
    }



    return (
        <div>
            <div className="header">Todo Tracker</div>
            <Form>
                <FormGroup>
                    <Label for="description">Decription</Label>
                    <Input type="text" name="description" value={forms.description} id="description" placeholder="Describe the issue..." onChange={onChange}/>
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label for="status">Severity</Label>
                    <Input type="select" name="status" value={forms.status} id="status" onChange={onChange}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Input>
                </FormGroup>
                <br/>
                <Button type="button" color="primary" onClick={addTodos}>Add</Button>
            </Form>

            <ColoredLine color="gray"/>

            <h2>LIST TODO</h2>
                    <Input type="text" className="search" placeholder="Search by description" onChange={(event) => searchByDes(event.target.value)}/>
                    <div className="filter flex j-between">
                        <h5>Filter</h5> 
                        <Button type="button" color="success" onClick={() => filterAll()}>All</Button>
                        <Button type="button" color="info" onClick={() => filterOpen()}>Open</Button>
                        <Button type="button" color="secondary" onClick={() => filterClosed()}>Closed</Button>
                    </div>
                    <div className="sort flex j-between">
                        <h5>Sort</h5>
                        <Input type="select" className="sort-select" onChange={(event) => sortByName(event.target.value)} >
                            <option value="none">None</option>
                            <option value="ASC">ASC</option>
                            <option value="DESC">DESC</option>
                        </Input>
                    </div>

            <ColoredLine color="gray"/>

            {todos.map((todo) => (
                <div>
                    <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                        <Toast>
                            <ToastHeader key={todo.id}>{todo.id}<span className="issue-status" value={todo}>{todo.state}</span></ToastHeader>
                                <ToastBody>
                                    <div className="issue-name">{todo.description}</div>
                                    <div className="issue-level">{todo.status}</div>
                                    <div className="button-group">
                                        <Button color="primary" onClick={() => changeState(todo.id)} disabled={false}>Close</Button>{' '}
                                        <Button color="danger" onClick={() => deleteTodos(todo.id)}>Delete</Button>
                                    </div>              
                                </ToastBody>
                        </Toast>
                    </div>
                </div>
            ))}  
        </div>
    )
}