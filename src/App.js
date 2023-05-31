import React from 'react';
import { BrowserRouter, Routes,  Route} from 'react-router-dom';
import Home from './componentes/home/Home';
import Portfolio from './componentes/portfolio/Portfolio';
import Store from './componentes/store/Store';
import Header from './componentes/header/Header';

function App() {
  return (
    <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/store" element={<Store />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;