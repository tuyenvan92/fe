import React from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default function KanbanBoard() {
    //let listTodo;
    fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
        method:'GET',
    })
    .then(res => res.json())
    .then(res => {
        //listTodo = res.data;
        fetchTodos(res.data)
    })
    // const newTodo = {
    //     id: Date.now().toString()
    // }
    function fetchTodos(list) {
        const cardTodos = document.getElementById('cardTodos')
        cardTodos.innerHTML = ''; 

        for (const index in list) {
            cardTodos.innerHTML +=
            `<div class="issue">${list[index].title}</div>
            <div class="button-group">
                <button className="edit-button button">EDIT</button>
                <button className="view-button button">VIEW</button>
                <p className="author">${list[index].author}n</p>
            </div>`
        }
    }
    return (
        <div className="KanbanBoard">
            <div className="top-part">
                <div className="title">Kanban Board</div>
                <div class="add-task"><FontAwesomeIcon icon={faPlus} className="icon"/> ADD TASK</div>
            </div>
            <div className="board">
                <div className="new column">
                    <div className="column-title orange">New</div>
                    <div className="new-groups">
                        <div className="card cardTodos" id="cardTodos">
                            {/* <div class="issue">Learn react</div>
                            <div class="button-group">
                                <button className="edit-button button">EDIT</button>
                                <button className="view-button button">VIEW</button>
                                <p className="author">Tony Nguyen</p>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="processing column">
                    <div className="column-title blue">In Process</div>
                </div>
                <div className="completed column">
                    <div className="column-title green">Completed</div>
                </div>
            </div>  
        </div>
    )
}