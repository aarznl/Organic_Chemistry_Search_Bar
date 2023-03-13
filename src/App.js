import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reactions from './pages/Reactions';
import Aboutus from './pages/Aboutus';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/reactions' element={<Reactions/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>
    </div>
  );
}

export default App;
