import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar';
import Sidebar from './Pages/Sidebar';
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import Data from './Pages/Data';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto:300,400,500,700']
      }
    });
  }, []);
  return (
    <div className="App">

    <Navbar/>

    <div className='body'>
      <Sidebar/>
      <Data/>

    </div>
    </div>
  );
}

export default App;
