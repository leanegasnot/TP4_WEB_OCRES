import React from 'react';

import './profilButton.css';

class ProfilButton extends React.Component {

    render() {
        return (
            <button className="ProfilButton" onClick={() => this.props.clickHandler(this.props.i)}>
                <p>{this.props.name}</p>
            </button>
        );
    }
}

export default ProfilButton;

