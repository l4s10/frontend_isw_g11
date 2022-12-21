import './App.css';
import Mantentions from './Components/MantentionsPage';
import AdminPage from './Components/AdminPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Mantentions/>}/>
          <Route path='admin' element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
