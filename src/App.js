
import './App.css';
import Card from './components/card/card';
import ContainerButtons from './components/container-buttons/container-buttons';
import ContainerOne from './components/container-one/container-one';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React, {useState} from 'react';

function App() {

  const [id, setIndex] = useState(null);

  const moveCard = (i) => {
    setIndex(i);
    console.log(i);
  }
  return (
    <>
      <DndProvider debugMode={true} backend={HTML5Backend}>
        <Card />
        <ContainerButtons />
        <ContainerOne  id={id === 1} moveCard={() => moveCard(1)} />
      </DndProvider>
    </>
   
  );
}

export default App;


