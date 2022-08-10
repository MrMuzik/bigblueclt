import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
          Edit <code>src/App.js</code> and save to reload.
        </nav>
        <p>Using typescript now.</p>
        <Link to="/about">About</Link>
      </header>
    </div>
  );
}

export default App;
