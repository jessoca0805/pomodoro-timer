import { useState } from 'react'
import { GiConsoleController } from 'react-icons/gi'

export default function TodoIndex() {
  const [inputText, setInputText] = useState('')

  //  陣列，每個成員 todo = {id,text}
  const [todos, setTodos] = useState([
    { id: 1, text: '買書' },
    { id: 2, text: '學react' },
  ])

  //addClick
  const handleAddClick=()=>{
    const newTodo = { id: Number(new Date()), text: inputText }
    setTodos([newTodo, ...todos])
    console.log('點擊成功');
    
  }
  //removeClick
  const handleRemoveClick=(id)=>{
    const newList=todos.filter((v)=>{
        v.id !== id
    })
    setTodos(newList)
    console.log('刪除成功');
  }



  return (
    <>
      <div className="timer-container">

        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const newTodo = { id: Number(new Date()), text: inputText }
              setTodos([newTodo, ...todos])
              //清空輸入框
              setInputText('')
            }
          }}
        />
        <button
          className="btn bg-info mx-2"
          onClick={handleAddClick}
        >
          Add
        </button>
        <ul>
          {todos.map((v, i) => {
            return <li key={v.id} className="mt-3">{v.text} <button className="btn bg-warning mx-2" onClick={()=>handleRemoveClick(i.id)}>刪除</button></li>
          })}
        </ul>
      </div>
    </>
  )
}
