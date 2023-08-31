import { useState, useEffect } from 'react'
import { HiPlay, HiPause } from 'react-icons/hi2'
import { BiRun, BiDotsHorizontalRounded } from 'react-icons/bi'
import { GiStarFlag } from 'react-icons/gi'

export default function Timer() {
  const initialTime = 25 * 60 //將25分鐘轉成秒數
  const [countDown, setCountDown] = useState(initialTime)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => {
        setCountDown((prevTimer) => prevTimer - 1)
      }, 1000)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60
    return `${minutes}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
  }

  const startTimer = () => {
    setIsRunning(true)
  }

  return (
    <>
      <div className="timer-container">
        <h1>{formatTime(countDown)}</h1>
        <h3>What to do next?</h3>
        <div className="d-flex  justify-content-center">
          <div className="timer-icon">
            <HiPlay onClick={startTimer} />
          </div>
          <div className="timer-icon">
            <HiPause />
          </div>
        </div>
        <hr />
        <div className="text">
        <h6>You just started on the road.</h6>
        <h6>Keep going!</h6>
        </div>
        <div className="progress-bar">
        <BiRun />
        <div className='progress-bar'></div>
        {/* <BiDotsHorizontalRounded /> */}
        <GiStarFlag />
        </div>
      </div>
    </>
  )
}
