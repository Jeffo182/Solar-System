import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {Planets.map((element) => (
            <PlanetCard key={ element.name } Planets={ element } />
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
