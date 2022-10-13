import logo from './logo.svg';
import All from './components/All'
import Footer from './components/Footer'
import Nav from './components/Nav'
import One from './components/One'
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <All/>
      <One/>
      <Footer/>
    </div>
  );
}

export default App;
