import React from 'react';
import { Route,  Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Account from './Pages/Account';
import Home from './Pages/Home';
import Signin from './Pages/Signin';


function App() {
  return (
    
    <div>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route
          path='/account'
          element={
            <Protected>
              <Account />
            </Protected>
          }
        />
      </Routes>
    </AuthContextProvider>
  </div>
   
  );
}

export default App;