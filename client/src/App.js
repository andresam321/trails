import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Users from './components/Users';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/trails/register' element={<Register/>}/>
          <Route path='/trails/user/:id' element={<User/>}/>
          <Route path='/trails/users' element={<Users/>}/>
          <Route path='/trails/add' element={<Add/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;