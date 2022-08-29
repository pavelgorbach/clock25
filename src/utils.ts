function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0')
}

export function secondsToMMSS(totalSeconds: number) {
  const min = Math.floor(totalSeconds / 60)
  const sec = totalSeconds % 60 
  return `${padTo2Digits(min)}:${padTo2Digits(sec)}` 
}