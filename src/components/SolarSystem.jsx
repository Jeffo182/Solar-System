import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="subtitulo">
        <Title headline="Planetas" />
        <div className="planetas" data-testid="solar-system">
          {Planets.map((element) => (
            <PlanetCard
              key={ element.name }
              planetImage={ element.image }
              planetName={ element.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
