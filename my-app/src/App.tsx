import React from 'react';
import DogList from './components/DogList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>API de Perros</h1>
      <DogList />
    </div>
  );
};

export default App;
/*
import React from 'react';
import ModeloLista from './components/ModeloLista';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Ejemplo servicio</h1>
      <ModeloLista />
    </div>
  );
};

export default App;
*/