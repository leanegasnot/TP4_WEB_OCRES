import React from 'react';
import './card.css';
class Card extends React.Component {

    constructor(props) {
        super(props);


        this.state = { nb: 0 };
    }

    backgroundColors = ["linear-gradient(to left,red,white)", "linear-gradient(to left,#2d00f9,#ff0302)", "linear-gradient(to left,green,blue)", "linear-gradient(to left,red,grey)", "blue", "green", "red", "yellow", "black", "grey", "purple"];

    getColor = () => {
        var newStyle = "";
        do {
            newStyle = this.backgroundColors[Math.floor(Math.random() * this.backgroundColors.length)];
        } while (newStyle === this.state.style)
        this.setState({
            style: newStyle
        });
    }


    render() {
        return (
            <div className="Card">

                <div className="upperContainer" style={{ background: this.state.style, margin: "auto", color: "linear-gradient(to left,#2d00f7,#ff0291)" }}>
                    <div className="imageContainer">
                        <img src={this.props.profil.img} alt="" height="100px" width="100px" />
                    </div>
                </div>

                <div className="lowerContainer">
                    <h3> Nom :  {this.props.profil.nom} </h3>
                    <h3> Prénom : {this.props.profil.prenom} </h3>
                    <h3> Date de naissance : {this.props.profil.date} </h3>
                    <button className="Style" onClick={this.getColor}>Changer le style</button>
                </div>

                <div className="footer">
                    <div className="upperFooter">
                        <p>Publication :  {this.props.profil.publication} </p>
                        <p>Nombre de super : {this.state.nb}</p>
                    </div>

                    <div className="lowerFooter" style={{ marginLeft: "-400px" }}>
                        <button onClick={() => {
                            this.setState(
                                { nb: this.state.nb + 1 }
                            )
                        }}>👍 C'est super !</button>
                    </div>


                </div>

            </div>
        );
    }
}

export default Card;