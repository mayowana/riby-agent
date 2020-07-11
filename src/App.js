import React from 'react';
import Navbar from './components/Header/Navbar';
import Body from './components/Body/Body'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faBars } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(faHome, fab, faBars);

function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
