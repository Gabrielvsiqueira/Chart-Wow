import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import Personagem from './componentes/Personagem/index.js';

function App() {
  const classes = [
    {
      nome: "Horda",
      corPrimaria: "#000000",
      corSecundaria: "#F29727",
    },
    {
      nome: "Aliança",
      corPrimaria: "#000000",
      corSecundaria: "#F29727",
    },
  ];

  const [personagens, setPersonagens] = useState([]);

  const personagemAdicionado = (personagem) => {
    console.log(personagem);
    setPersonagens([...personagens, personagem]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario personagemCriado={personagem => personagemAdicionado(personagem)} />
      {classes.map(classe => (
        <Personagem
          key={classe.nome}
          nome={classe.nome}
          corPrimaria={classe.corPrimaria}
          corSecundaria={classe.corSecundaria}
          personagens={personagens.filter(personagem => personagem.faccao === classe.nome)}
        />
      ))}
    </div>
  );
}

export default App;
