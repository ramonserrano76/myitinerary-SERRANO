// App.jsx
import React from 'react';
import NavbarMain from './components/navbarmain/NavbarMain.jsx'; // Asegúrate de agregar .jsx
import Section from './components/section/Section.jsx'; // Asegúrate de agregar .jsx
import Footer from './components/footer/Footer.jsx'; // Asegúrate de agregar .jsx

const App = () => {
  return (
    <div>
      <NavbarMain />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
