import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const {
      Planets: { name: planetName, image: planetImage },
    } = this.props;
    const altPlaneta = `Planeta ${planetName}`;
    return (
      <div data-testid="solar-system">
        <img src={ planetImage } alt={ altPlaneta } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  Planets: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default PlanetCard;
