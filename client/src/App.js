import logo from './logo.svg';
import './App.css';
import Auth from './pages/auth/Auth';
import Home from './pages/Home/Home';
import Profile from './components/Profile/Profile';

import {Route, Routes, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=> state.AuthReducer.authData)
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={user? <Navigate to='Home' />: <Navigate to='auth' />} />

        <Route path='/Home' 
               element={user? <Home/> : <Navigate to= '../auth' />}
         />

         <Route path='/auth' 
               element={user? <Navigate to= '../Home' />:<Auth/>} />

          <Route path='/profile/:id' 
                 element={user? <Profile/> : <Navigate to='../auth/' />} 
          />
      </Routes>
      {/* <Auth/> */}
      {/* <Home/> */}
      {/* <Profile/> */}
    </div>
  );
}

export default App;
