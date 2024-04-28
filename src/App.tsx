import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Account } from './screens/Account';
import { Deposit } from './screens/Deposit';
import { Withdraw } from './screens/Withdraw';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/conta' element={<Account/>}/>
        <Route path='/deposito' element={<Deposit/>}/>
        <Route path='/saque' element={<Withdraw/>}/>
      </Routes>
    </Router>
  );
}