import './App.css';
import FirstComponent from './components/first';
import SecondComponent from './components/second';
import { useState } from 'react';
import './frame.css';


function App() {

  const [counter, setCounter] = useState(0)
  const [mountFirst, First] = useState(true)
  const [mountSecond, Second] = useState(false)


  const MountEventFirst = () => {
    Second(false)
    First(true)
  }

  const MountEventsecond = () => {
    Second(true)
    First(false)
  }


  return (
    <div className='frame'>   
        <h1>Count : {counter}</h1>
        <div>
          <button class='btn1' onClick={() => setCounter(counter + 1)}>Increment</button>
          <button class='btn2' onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>

        {mountFirst && <FirstComponent/>}
        {mountSecond && <SecondComponent/>}

        <div>
          <button onClick={MountEventFirst}>First Component</button>
          <button onClick={MountEventsecond}>Second Component</button>
        </div>

    
    </div>
  )
}
export default App;
