

import React, {setState} from 'react';
import styles from './container-one.module.css'
import { useDrop } from 'react-dnd';
import Card from '../card/card';




function ContainerOne({id, moveCard}) {

  console.log({id});

  const [, dropRef] = useDrop({
    accept: 'title',
    drop: () => moveCard(),
    collect: (monitor) => ({
        isOver: monitor.isOver()
    })
  })

  return (
    <>
      <div>
        <div ref={dropRef} className={styles.container_one}>
          Просто карзина
          {id && <Card/>}
        </div>
      </div>
    </>
    
  );
}

export default ContainerOne;