import './scss/App.css';
import iconCheck from './assets/check.png'


function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="mainContent">

          <div className="banner">
            <div className="bg-blur"></div>
            <h1 classname="banner-title">To Do List</h1>
          </div>

          <button type="button">Load Data</button>

          <div className="listContainer">
            <div className="todo-item j-between">
              <div className="todo-group j-between">
                <img src={iconCheck} alt="icon" className="icon"/>
                <div className="todo-info">
                  <div className="todo-title">Learn React</div>
                  <div className="todo-author">Tony Nguyen</div>
                </div>
              </div>
              <div className="todo-status">new</div>
            </div>

            <div className="todo-item j-between">
              <div className="todo-group j-between">
                <img src={iconCheck} alt="icon" className="icon"/>
                <div className="todo-info">
                  <div className="todo-title">Learn React</div>
                  <div className="todo-author">Tony Nguyen</div>
                </div>
              </div>
              <div className="todo-status">new</div>
            </div>

          </div>
          
          <button type="button" className="addButton">+</button>
        </div>
      </div>
      
    </div>
  );
}

export default App;
