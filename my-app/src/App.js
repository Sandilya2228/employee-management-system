/*import logo from './logo.svg';
import './App.css';
import DupArray from './JsPractice/DupArray';
import AddingObject from './JsPractice/AddingObject';
import useBackgroundColor from './JsPractice/customhook/useBackgroundColor';
import { useEffect, useState } from 'react';
//import Counter from './JsPractice/Counter';
import Users from './JsPractice/User';
//import ToggleReuse from './JsPractice/ToggleReuse';
//import {ToggleOne,ToggleTwo}  from './JsPractice/Toggle';
import Sample from './JsPractice/sample';
import Counter from './JsPractice/Counter';
/*function App() {
  const { color, changeColor } = useBackgroundColor();
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={changeColor}>
        Change Background
      </button>
    </div>
  );
}*

export default App;*/

/*function App() {
  
  const [active, setActive] = useState("home");
  
const renderContent = () => {
    switch (active) {
      case "home":
        return <h2>Home Content</h2>;
      case "about":
        return <h2>About Content</h2>;
      case "contact":
        return <h2>Contact Content</h2>;
      default:
        return <h2>Welcome</h2>;
    }
  };


  return (
    /*<div>
      <h1>My React App</h1>
      {/*<Counter/>
      <ToggleOne/>
      <ToggleTwo/>

      <ToggleReuse 
       buttonText= "ToggleOne"
       messageText= "Hello This is Toggle One"
      />

      <ToggleReuse 
       buttonText= "ToggleTwo"
       messageText = "Hello this is Toggle Two"
      />
    </div>*/



/*<div style={{ display: "flex", height: "100vh" }}>
      
      /* Sidebar 
      <div style={{ width: "200px", background: "#eee", padding: "10px" }}>
        <button onClick={() => setActive("home")}>Home</button><br /><br />
        <button onClick={() => setActive("about")}>About</button><br /><br />
        <button onClick={() => setActive("contact")}>Contact</button>
      </div>

      {/* Main Content 
      <div style={{ marginLeft: "20px", padding: "20px" }}>
        {renderContent()}
      </div>

    </div>


  );
}

export default App;


function App(){

 const [color, changeColor] = useBackgroundColor();
  return (
    /*<div style= {{ backgroundColor : color, height : "100vh" }}>
      <button onClick={changeColor}>
        change Background
      </button>
    </div>
    <div>
      <h1>counter App</h1>
      <div>
      <Counter/>
      <Toggle/>
      <Users/>
      <Sample/>
    </div>
  );
}
export default App;

/*import { useState }from "react";

/*function App(){
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() ==="") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i)  => i !== index);
      setTasks(updatedTasks);
  };

  return(
    <div>
      <h1> TO Do APP</h1>

      <input
      type ="text"
      placeholder="Enter Task"
      value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}> add</button>
      <ul>
        {tasks.map((item, index) =>(
          <li key={index}>{item}
          <button onClick={() => deleteTask(index)}> Delete
            </button></li>
        )
        )}
      </ul>
    </div>
  );

}
export default App;*/

//import React, { useState } from "react";

/*function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  // Add todo
  const addTodo = () => {
    setTodos([...todos, text]);
    setText("");
  };

  // Delete todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <h3>Todo App</h3>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;*/


/*function App() {
  const [name, setName] = useState(0);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (!name || !price) return;

    const newItem = { name, price };
    setData([...data, newItem]);

    setName("");
    setPrice("");
  };

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };


  return (

    <div style={{ padding: "20px" }}>
      <h2>Product list</h2>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <input
        type="text"
        placeholder="Enter price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}></input>

      <button onClick={handleAdd}>Add</button>
      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) =>
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>

              <td>
                <button onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>

            </tr>
          )}
        </tbody>
      </table>
    </div>

  );
}
export default App;*/

/*function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  console.log("Component Rendered");

  // API Call
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  // Add Task
  const addTask = () => {
    if (!newTask.trim()) return;

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false
    };

    setTasks([...tasks, task]);

    setNewTask("");
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}

            <button
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;*/



/*
function App() {
  return (
    <div>
      <Sample />
      <Counter/>
      <Users/>
    </div>
  );
}

export default App;*/


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./JsPractice/login";
import Users from "./JsPractice/User";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/users"
          element={<Users />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
