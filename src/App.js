import './App.css';
import NavBar from './components/NavBar';
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <div>
   
  
   <div style={{width:'100%',position: 'sticky', top: '0',zIndex: '100'}}>
    <NavBar />
    </div>
       <Routes>
           <Route path='/' exact component={NavBar} />
           <Route path='/certificates' component={NavBar} />
           <Route path='/projects' component={NavBar} />
           <Route path='/skills' component={NavBar} />
           <Route path='/contact' component={NavBar} />
       </Routes>
       </div>
    </Router>
   </div>
  );
}

export default App;
