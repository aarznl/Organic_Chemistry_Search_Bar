import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reactions from './pages/Reactions';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reactions' element={<Reactions/>}/>
      </Routes>
    </div>
  );
}

export default App;
