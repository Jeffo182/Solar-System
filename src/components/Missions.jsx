import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import arrayMissions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {arrayMissions.map((element) => (
          <MissionCard key={ element.name } arrayMissions={ element } />
        ))}
      </div>
    );
  }
}

export default Missions;
