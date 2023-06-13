import Home from'./components/Home.js';
import Nav from'./components/Nav.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="navbar" element={<Nav />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
