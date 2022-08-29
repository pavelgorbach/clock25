import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Timer } from './features/Timer'

const MyTimer = new Timer()

ReactDOM.render(
  <App timer={MyTimer}/>,
  document.getElementById('root') as HTMLElement
)

reportWebVitals()
