import React, { Component } from 'react'
import "./style.css"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frase = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.', 
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
  'Fica ai na frente, pra tu rodas! -Zé Zaga'];
  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frase.length);
    state.textoFrase = '"' + this.frase[numeroAleatorio] + '"';
    this.setState(state)
  }

  render(){
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao  nome='Abrir biscoito' acaoBtn={this.quebraBiscoito}/>
        <h3 className='textoFrase'>{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
      </div>
    );
  }
}
export default App;
