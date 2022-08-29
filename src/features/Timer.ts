import { makeAutoObservable } from "mobx"

let timer: NodeJS.Timeout

export class Timer {
  breakLength: number = 5
  sessionLength: number = 25
  seconds: number = 25 * 60 
  type: 'SESSION' | 'BREAK' = 'SESSION'
  paused: boolean = true

  constructor() {
    makeAutoObservable(this) 
  }

  decrement() {
    this.seconds -= 1
  }

  counter() {
    this.decrement()

    if(this.seconds < 0 && this.type === 'SESSION') {
      this.seconds = this.breakLength * 60
      this.type = 'BREAK'
    }

    if(this.seconds < 0 && this.type === 'BREAK') {
      this.seconds = this.sessionLength * 60
      this.type = 'SESSION'
    }

    timer = setTimeout(() => {
      if(!this.paused) {
        this.counter()
      }
    }, 1000)
  }

  toggleTimer() {
    this.paused = !this.paused
    clearTimeout(timer)
    if(!this.paused) {
      setTimeout(() => this.counter(), 1000)
    }
  } 

  incrementBreak() {
    if(this.breakLength === 60 || !this.paused) return
    if(this.type === 'BREAK') this.seconds += 60
    this.breakLength += 1
  }

  decrementBreak() {
    if(this.breakLength === 1 || !this.paused) return
    if(this.type === 'BREAK') this.seconds -= 60
    this.breakLength -= 1
  }

  incrementSession() {
    if(this.sessionLength === 60 || !this.paused) return
    if(this.type === 'SESSION') this.seconds += 60
    this.sessionLength += 1
  }

  decrementSession() {
    if(this.sessionLength === 1 || !this.paused) return
    if(this.type === 'SESSION') this.seconds -= 60
    this.sessionLength -= 1
  }

  reset() {
    this.paused = true
    clearTimeout(timer)
    this.breakLength = 5
    this.sessionLength = 25
    this.seconds = this.sessionLength * 60 
    this.type = 'SESSION'
  }
}