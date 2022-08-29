import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'

import styles from './App.module.css'
import Header from './components/Header'
import { Timer } from './features/Timer'
import { secondsToMMSS } from './utils'

function App(p: { timer: Timer }) {
  const beepRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if(p.timer.seconds === 0 && beepRef.current) {
      beepRef.current.play()
    } 
  }, [p.timer.seconds])

  const handleReset = () => {
    if(beepRef.current) {
      beepRef.current.play()
      beepRef.current.pause()
      beepRef.current.currentTime = 0
    }

    p.timer.reset()
  } 

  return (
    <div className={styles.container}>
      <Header title="25 + 5 Clock" />
      <div className={styles.main}>
        <div className={styles.controls}>
          <div id="break-label" className={styles.controlsLabel}>Break Length</div>
          <div id="break-decrement" className={styles.control} onClick={() => p.timer.decrementBreak()}>&darr;</div>
          <div id="break-length">{p.timer.breakLength}</div>
          <div id="break-increment" className={styles.control} onClick={() => p.timer.incrementBreak()}>&uarr;</div>
        </div>

        <div className={styles.controls}>
          <div id="session-label" className={styles.controlsLabel}>Session Length</div>
          <div id="session-decrement" className={styles.control} onClick={() => p.timer.decrementSession()}>&darr;</div>
          <div id="session-length">{p.timer.sessionLength}</div>
          <div id="session-increment" className={styles.control} onClick={() => p.timer.incrementSession()}>&uarr;</div>
        </div>

        <div className={styles.timer}>
          <div id="timer-label" className={styles.timerLabel}>{p.timer.type === 'SESSION' ? 'Session' : 'Break'}</div>
          <div id="time-left" className={[styles.timeLeft, p.timer.seconds < 60 ? styles.warn : ''].join(' ')}>{secondsToMMSS(p.timer.seconds)}</div>
          <div id="start_stop" className={styles.startStop} onClick={() => p.timer.toggleTimer()}>&#x23EF;</div>
          <div id="reset" className={styles.reset} onClick={handleReset}>&#x1F504;</div>
          <audio id="beep" className={styles.beep} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={beepRef} />
        </div>
      </div>
    </div>
  )
}

export default observer(App)
