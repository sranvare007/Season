import React from 'react';

class Spinner extends React.Component
{
    render()
    {
        return (
            <div class="ui active dimmer">
                <div class="ui text loader">{this.props.message}</div>
            </div>
        );
    };
}

Spinner.defultProps = {
    message: 'Loading...'
}

export default Spinner;