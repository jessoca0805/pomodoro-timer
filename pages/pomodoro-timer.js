import React from 'react'
import Timer from '@/components/timer'
import Couter from '@/components/couter/couter'
import TodoIndex from '@/components/todo'



export default function PomodorotTimer() {
  return (
    <>
      <div className="d-flex">
        <Timer />
        <TodoIndex /></div>
    </>
  )
}
