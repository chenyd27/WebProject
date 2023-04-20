import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from 'pages/home/Home';
import Personal from 'pages/personal/Personal';
import EventDetail from 'pages/eventDetail/EventDetail';
import Post from 'pages/post/Post';
import Message from 'pages/message/Message';

function Layout(){
    return (
        <div>
          <div>
            <Navbar/>
          </div>
          <div style={{margin : 35}}>
            <Outlet/>
          </div>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/login'></Route>
            <Route path='/' element={<Layout/>}>
              <Route path='' element={<Home/>}></Route>
              <Route path='info'></Route>
              <Route path='personal' element={<Personal/>}></Route>
              <Route path='message' element={<Message/>}></Route>
              <Route path='post' element={<Post/>}></Route>
              <Route path='eventdetail/:id' element={<EventDetail/>}></Route>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
