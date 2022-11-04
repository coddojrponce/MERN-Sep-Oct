import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import {List} from './components/List'
import Form from './components/Form'

function App() {
  const [list,setList] = useState([])

  return (
    <div className="App">
      <Form list={list} setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
