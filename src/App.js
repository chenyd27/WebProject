import './App.css';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

function Layout(){
    return (
        <div>
          <div>
            <Navbar/>
          </div>
          <div>
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
              <Route path=''></Route>
              <Route path='info'></Route>
              <Route path='personal'></Route>
              <Route path='message'></Route>
              <Route path='post'></Route>
              <Route path='eventdetail/:id'></Route>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
