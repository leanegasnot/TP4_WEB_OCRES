import React from 'react';

import './App.css';

import ProfilButton from './Components/profilButton';
import Card from './Components/card';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  profils = [
        {
          nom: 'Hord',
          prenom:'Michelle',
          date: '18/08/1975',
          img: 'https://resize2.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/psychologie/tests-de-personnalite/tests-de-caractere/etes-vous-une-personne-positive/4473260-3-fre-FR/Etes-vous-une-personne-positive.jpg',
          publication :'Bientôt la reprise !'
        },
        {
          nom: 'Porter',
          prenom: 'Mick',
          date: '23/12/1973',
          img:'https://4bgowik9viu406fbr2hsu10z-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/Portrait_3.jpg',
          publication :'Intègre l’un des MSc et choisis parmi : Data Engineer & IA, Sustainable Energy Futures ou Manager de la cybersécurité.'
        },
        {
          nom: 'Doufer',
          prenom: 'Jeanne',
          date: '13/04/1950',
          img: 'https://thumbs.dreamstime.com/b/femme-d-affaires-m%C3%BBre-19601166.jpg',
          publication :'Bonjour à tous, comment allez-vous aujourdhui ?'
        }
        ];
 
  Change = (newIndex) => {
    this.setState({
      index: newIndex
    });
  }

  render(){
    return (
      <div className="App">
              
        {this.profils.map((profil,index) => <ProfilButton name= {profil.prenom} i= {index} clickHandler={this.Change} />)}
       
        <Card profil={this.profils[this.state.index]} />
        
    </div>
    );
}
}

export default App;