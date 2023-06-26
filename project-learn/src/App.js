import React, {
  useEffect,
  useState
} from 'react';
import './styles/styles.scss';

//counter
// 1. implement counter
// 2. make it a Component
// 3. add custom hooks 
// 4. making store ( redux )
// 5. css part ( scss )
// 6. tailwind css

//counter - 
// display the count
// button to increase
// button to decrease


function App() {
  
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="App">
      <div className='container'>
      <div className="count">
        {count}
      </div>
      <div className='controls'>
        <button onClick={increment}>
          ➕ 
        </button>
        <button onClick={decrement}>
          ➖ 
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;
