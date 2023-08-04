// App.jsx
import React from 'react';
import NavbarMain from './components/navbarmain/NavbarMain.jsx';
import Carrousel from './components/carrousel/Carrousel.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './pages/Home/Home.jsx';
const App = () => {
  return (
    <div className='app-container bg-dark'>
      <Router>
        <div className="app-container">
          <NavbarMain />
          <Switch>
            {/* home page */}
            <Route exact path="/" component={Home} />
            {/* Otras rutas para otras páginas que desees agregar en el futuro */}
          </Switch>
          <Carrousel />
          <Footer />
        </div>
      </Router>
      
    </div>
  );
};

export default App;
