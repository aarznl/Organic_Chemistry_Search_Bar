import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reactions from './pages/Reactions';
import Aboutus from './pages/Aboutus';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/Organic_Chemistry_Search_Bar/' element={<HomePage/>}/>
        <Route path='/Organic_Chemistry_Search_Bar/reactions' element={<Reactions/>}/>
        <Route path='/Organic_Chemistry_Search_Bar/aboutus' element={<Aboutus/>}/>
      </Routes>
    </div>
  );
}

export default App;
