import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rent from './components/rent/Rent';
import RentGame from './components/rent/RentGame';
import Navbar from './components/ui/Navbar';
import Return from './components/return/Return';
import ReturnGame from './components/return/ReturnGame';

const App: React.FC = () => {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rent/:gameId' element={<RentGame />} />
        <Route path='/rent' element={<Rent />} />
        <Route path='/return' element={<Return />} />
        <Route path='/return/:gameId' element={<ReturnGame />} />
      </Routes>
    </Navbar>
  );
};

export default App;
