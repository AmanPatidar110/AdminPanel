import './App.css';
import Auth from "./components/Auth/Auth"

import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Auth/>
      </div>
    </BrowserRouter>
  );
}

export default App;
