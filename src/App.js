import logo from './logo.svg';
import './App.css';
import './Mystyles.css';
import MyNavbar from './components/MyNavbar';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="container">
   <MyNavbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="Products" element={<Products/>}/>
    <Route path="Contact" element={<Contact/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
  <LoginForm/>
  <Footer/>
    </div>
  );
}

export default App;
