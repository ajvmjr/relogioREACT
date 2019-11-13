import React from 'react';
import './App.css';

function DataFormatada(props){
  return <h2>Horário atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: new Date()
    };
  }

  //Ciclo de vida que ocorre quando o componente é inserido no DOM
  //Através da função setInterval, o relógio é criado com o timerID atelado
  //Chama a função thick() a cada 1 segundo
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.thick()
    }, 1000)

    console.log('Eu sou o relógio: ' + this.timerId);
  }

  //Ciclo de vida que ocorre quando o componente é removida
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  //Define no state date a data atual a cada vez que é chamada
  thick(){
    this.setState({
      date: new Date()
    })
  }

  //Renderiza na tela o título e o retorno da função DataFormatada
  //Passando date como valor atual do state
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date={this.state.date}/>
      </div>
    )
  }
}

//Função principal que é chamada no index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock/>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
