import React from 'react';
import About from './components/About/About.js';
import Header from './components/Header/Header.js'
import Introduction from './components/Introduction/Introduction.js'
import Services from './components/Services/Services.js'
import Footer from './components/Footer/Footer.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(fab)

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Services/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
