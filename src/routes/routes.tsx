import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Cont from '../pages/Cont';
import ContaInfo from '../pages/ContaInfo';
import Home from '../pages/Home';
import { AppContext } from '../context/AppContext';

const MainRoutes = () => {

  const { islogedIn } = useContext(AppContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/conta/:id' element={islogedIn ? <Cont /> : <Home />} />
      <Route path='/infoconta' element={<ContaInfo />} />
    </Routes>
  );
}
export default MainRoutes