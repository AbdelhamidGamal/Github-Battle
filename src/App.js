import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Battle from './components/Battle';
import Search from './components/Search';
import Popular from './components/Popular';

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/battle' component={Battle} />
      <Route path='/search' component={Search} />
      <Route path='/popular' component={Popular} />
    </BrowserRouter>
  );
}

export default App;
