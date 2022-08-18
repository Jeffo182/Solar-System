import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem headline="Planetas" Planets={ Planets } />
      </>);
  }
}

export default App;
