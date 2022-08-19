import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const {
      arrayMissions: { name, year, country, destination },
    } = this.props;
    return (
      <div data-testid="mission-card">
        <h3>{ name }</h3>
        <p>{ year }</p>
        <p>{ country }</p>
        <p>{ destination }</p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  arrayMissions: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }).isRequired,
};
export default MissionCard;
