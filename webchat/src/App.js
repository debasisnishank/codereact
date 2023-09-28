// import socketIO from 'socket.io-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Join from './components/Join/Join';
import './App.css';
import Chat from './components/Chat/Chat';

// const ENDPOINT = 'http://localhost:8000/';
// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });
function App() {

  // socket.on('connect',()=>{})

  return (
    <>

      <Router>
        <Routes>

          <Route exact path='/' Component={Join} />
          <Route path='/chat' Component={Chat} />
        </Routes>



      </Router>

    </>
  );
}

export default App;
