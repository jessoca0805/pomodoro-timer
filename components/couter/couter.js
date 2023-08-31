import { useState ,useEffect } from 'react'

export default function Couter() {
const initialTime=25*60 //將25分鐘轉換成秒數

  const [count, setCount] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCouter => prevCouter - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);
  const formatTime=seconds=>{
    const minutes=Math.floor(seconds/60)
    const secondsLeft=seconds%60
    return`${minutes}:${secondsLeft<10?'0':''}${secondsLeft}`
  }

  const startTimer=()=>{
    setIsRunning(true)
  }

  return (
    <>
      {/* <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + value)
        }}
      >
        {value > 0 ? `-${value}` : value}
      </button> */}
      <h2>
      {formatTime(count)}</h2>
      <button onClick={startTimer}>
      Start Countdown
      </button>
    </>
  )
}
