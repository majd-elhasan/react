import logo from './logo.svg';
import './App.css';
import Formik from './components/formik';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formik/>
        
      </header>
    </div>
  );
}

export default App;
