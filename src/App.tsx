import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Account } from './screens/Account';
import { Deposit } from './screens/Deposit';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conta' element={<Account/>}/>
        <Route path='/deposito' element={<Deposit/>}/>
      </Routes>
    </Router>
  );
}