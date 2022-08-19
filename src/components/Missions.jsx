import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import arrayMissions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div>
        <div className="subtitulo">
          <Title headline="Missões" />
        </div>
        <div className="card-mission-list" data-testid="missions">
          {arrayMissions.map((element) => (
            <MissionCard key={ element.name } arrayMissions={ element } />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
