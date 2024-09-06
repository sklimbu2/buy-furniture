import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className='app'>
      <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
