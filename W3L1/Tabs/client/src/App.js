import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Tabs from './components/Tabs'
import Content from './components/Content'

function App() {

  const myArray = [
    {
      tabNum:"Tab 1",
      content:"Tab 1 content is showing here"},
    {
      tabNum:"Tab 2",
      content:"Tab 2 content is showing here"
    },
    {
      tabNum:"Tab 3",
      content:"Tab 3 content is showing here"
    }
  ]

  const [activeTab, setActiveTab] = useState(0)
  const [allTabs,setAllTabs] = useState(myArray)

  return (

    <div className="App">
      <Tabs 
      activeTab = {activeTab}
      setActiveTab={setActiveTab}
      allTabs = {allTabs}
      />
      <Content
      activeTab = {activeTab}
      allTabs = {allTabs}
      />
    </div>
  );
}

export default App;
