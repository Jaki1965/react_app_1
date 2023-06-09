
import React from 'react';
import styles from './card.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {BUTTON_ONE_CLICK_FIRST_TIME, BUTTON_ONE_CLICK_SECOND_TIME} from '../services/actions/container-buttons';
import { useDrag } from 'react-dnd'

function Card() {
 
  const buttonOneClick = useSelector(store => store.button_one.stateStyle);
  
  const dispatch = useDispatch();

  const hadleClickDiv = () => {
  if(buttonOneClick !== true){
    dispatch({
      type:BUTTON_ONE_CLICK_FIRST_TIME
    }) 
  } else {
    dispatch({
      type: BUTTON_ONE_CLICK_SECOND_TIME
    }) 
  }
}

let titleStyle = styles.title;
const noMe = styles.title_click;
if (buttonOneClick){
  titleStyle = noMe
}


const [{ isDragging }, dragRef] = useDrag({
  type: 'title',
  collect: (monitor) => ({
      isDragging: monitor.isDragging()
  })
})

  return (
    <>
      <div ref={dragRef} className={styles.container} >
      {isDragging? 
          <img className={styles.image} src='https://adonius.club/uploads/posts/2022-02/1645086948_39-adonius-club-p-gagarin-arti-64.jpg'></img>
        :  <h1  className={titleStyle} onClick={hadleClickDiv} >
          Первый элемент для уроков
        </h1>
        }
      </div>
    </>
      
  );
}

export default Card;