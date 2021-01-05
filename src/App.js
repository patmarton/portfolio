import React from 'react';
import About from './components/About/About.js';
import Header from './components/Header/Header.js'
import Introduction from './components/Introduction/Introduction.js'
import Services from './components/Services/Services.js'
import Footer from './components/Footer/Footer.js';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Skills from './components/Skills/Skills.js';


library.add(fab,fas)

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Services/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
