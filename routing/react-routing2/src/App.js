import './App.css';
import logo from './images/react.png';
import AboutUs from './components/about_us';
import Contact from './components/contact';
import Products from './components/products';
import HomePage from './components/HomePage';
import { Routes , useParams , Link , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className='logo' src={logo}/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/HomePage" className='nav-link active'>Anasayfa</Link>
              </li>
              <li className="nav-item">
                <Link to="/about_us" className="nav-link">hakkımızda</Link>
              </li>
              <li className="nav-item">
                <Link to="/products"  className="nav-link">ürünler</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"  className="nav-link">iletişim</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <div className='container mt-3'>
      <div className='row'>
        <Routes>
          <Route path="/about_us" element={<AboutUs/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/HomePage" element={<HomePage/>}/>
        </Routes>
  {/* useParams section */}
        <div className='col-md-12'>
        <div className="alert alert-warning" role="alert">
            ID : &nbsp;
          <Routes>
            <Route path="/:id_info" element={<IDFunction/>}/>
          </Routes>
        </div>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default App;

function IDFunction() {
  let {id_info} = useParams();
  return(
    <>
     {id_info}
    </>
  )
}