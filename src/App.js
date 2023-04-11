import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    }
    if (!input) {
      alert("please fill input field")
    } else {
      //add todo to the list
      setList([...list, newTodo])
      //clear the box
      setInput("")
    }

  }
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)
  }
  const removeAll = () => {
    setList([])
  }
  return (
    <div >
      <h1>TODO APP</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Add any work' /><br />
        <button onClick={() => addTodo(input)}>Add</button>
        {list.map((todo) => {
          return (
            <ul style={{display:"flex", marginRight : "5px"}} key={todo.id} >
              <li style={{marginRight : "5px"}}>{todo.todo}</li>
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </ul>
          )
        })}
        <button onClick={() => removeAll()}>remove all</button>
      </div>
    </div>
  )
}

export default App