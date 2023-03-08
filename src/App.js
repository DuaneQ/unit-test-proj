
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import Countries from './countries';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/countries' element={<Countries/>}></Route>
    </Routes>
  )
}

export default App;
