
import StopWatch from './components/StopWatch';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import Timer from './components/Timer';
import Navbar from './components/Navbar';
import Boxes from './components/Boxes';
import './Styles/styles.scss'
import { Route, Routes} from 'react-router-dom'
import Users from './components/Users';

function App() {
  
  return (
    <>
     <Routes>
      < Route path='/' element={<StopWatch/>}/>
      < Route path='boxes' element={<Boxes/>}/>
      < Route path='randomnumber' element={<RandomNumberGenerator/>}/>
      < Route path='timer' element={<Timer/>}/>
      < Route path='users' element={<Users/>}/>

      < Route path='users/:userId' element={<Users/>}/>

     </Routes>
    </>
  );
}

export default App;
