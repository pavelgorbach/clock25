import { useRef } from 'react'

import styles from './App.module.css'
import Header from './components/Header'

function App() {
  const beepRef = useRef(null)

  return (
    <div className={styles.container}>
      <Header title="25 + 5 Clock" />
      <div className={styles.main}>
        <div className={styles.controls}>
          <div id="break-label" className={styles.controlsLabel}>Break Length</div>
          <div id="break-decrement">&darr;</div>
          <div id="break-length">5</div>
          <div id="break-increment">&uarr;</div>
        </div>
        <div className={styles.controls}>
          <div id="session-label" className={styles.controlsLabel}>Session Length</div>
          <div id="session-decrement">&darr;</div>
          <div id="session-length">25</div>
          <div id="session-increment">&uarr;</div>
        </div>
        <div className={styles.timer}>
          <div id="timer-label" className={styles.timerLabel}>Session</div>
          <div id="time-left" className={styles.timeLeft}>25:00</div>
          <div id="start_stop" className={styles.startStop} onClick={() => {}}>play/pause</div>
          <div id="reset" className={styles.reset} onClick={() => {}}>reset</div>
          <audio id="beep" className={styles.beep} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={beepRef} controls />
        </div>
      </div>
    </div>
  );
}

export default App
