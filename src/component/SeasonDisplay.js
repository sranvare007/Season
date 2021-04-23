import React from 'react';
import '../style/SeasonDisplay.css';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat > 0 ? 'winter' : 'summer';
    }
};

const configSeason = {
    winter: {
        text: "Burr it' s Chilly!",
        icon: "snowflake"
    },
    summer: {
        text: "Let' s hit the beach!",
        icon: "sun"
    }
};

class SeasonDisplay extends React.Component
{

    season = getSeason(this.props.lat, new Date().getMonth());
    seasonProp = configSeason[this.season];

    render()
    {
        return (
            <div className={`season-display ${this.season}`}>
                <i className={`${this.seasonProp.icon} icon massive icon-left`}></i>
                <h3>{this.seasonProp.text}</h3>
                <i className={`${this.seasonProp.icon} icon massive icon-right`}></i>
            </div>
        );
    }
};

export default SeasonDisplay;