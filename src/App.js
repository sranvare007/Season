import React from 'react';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner from './component/Spinner';

class App extends React.Component
{
    state = { lat: null, errorMessage: '' };

    componentDidMount()
    {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            error => this.setState({ errorMessage: error.message })
        );
    }

    render()
    {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return <Spinner message="Please wait loading season....."/>;
    }

}

export default App;