import React, { useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (todo) => {
    const newTodo = {
      id : Math.random(),
      todo : todo,
    }

    //add todo to the list
    setList([...list, newTodo])
    //clear the box
    setInput("")
  }
  const deleteTodo = (id)=> {
    const newList = list.filter((todo) => todo.id !== id)
    setList(newList)
  }
  return (
    <div>
      <h1>TODO APP</h1>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='Add any work' />
      <button onClick={() => addTodo(input)}>Add</button>
      {list.map((todo)=> {
        return(
        <ul key={todo.id}>
          <li>{todo.todo}</li>
          <button onClick={() => deleteTodo(todo.id)}>&times;</button>
        </ul>
        )
      })}
    </div>
  )
}

export default App