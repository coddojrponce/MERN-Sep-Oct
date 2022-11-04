import logo from './logo.svg';
import {BrowserRouter, Route, Routes, Navigate,useNavigate} from 'react-router-dom'
import List from './components/List'
import View from './components/View'
import Create from './components/Create'
import Update from './components/Update'
import NotFound from './components/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/pizza"/>}/>
          <Route path="/pizza" element={<List/>}/>
          <Route path="/pizza/:id" element={<View/>}/>
          <Route path="/pizza/:id/edit" element={<Update/>}/>
          <Route path="/pizza/create" element={<Create/>}/>
          <Route path="/pizza/notfound" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
