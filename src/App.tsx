import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './screens/Home';
import { Account } from './screens/Account';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Conta' element={<Account/>}/>
      </Routes>
    </Router>
  );
}