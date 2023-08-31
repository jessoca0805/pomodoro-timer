import React from 'react'
import Timer from '@/components/timer'
import Couter from '@/components/couter/couter'
import TodoList from '@/components/todo-list'

export default function PomodorotTimer() {
  return (
    <>
      <div className="d-flex">
        <Timer />
        <TodoList />
      </div>
    </>
  )
}
