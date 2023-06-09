import React from 'react';
import styles from './container-buttons.module.css'
import { useSelector, useDispatch } from 'react-redux';
import {BUTTON_ONE_CLICK_FIRST_TIME, BUTTON_ONE_CLICK_SECOND_TIME} from '../services/actions/container-buttons';



function ContainerButtons() {
  
  const buttonOneClick = useSelector(store => store.button_one.stateStyle);
  
  const dispatch = useDispatch();



  const handleClickButtonOne =()=>{
    if(buttonOneClick !== true){
      dispatch({
        type: BUTTON_ONE_CLICK_FIRST_TIME
      }) 
    } else {
      dispatch({
        type: BUTTON_ONE_CLICK_SECOND_TIME
      }) 
    }
     
  }
  

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Здесь будут кнопки
      </h2>
      <div className={styles.box_button_1}>
        <button className={styles.button_1} onClick={handleClickButtonOne}>Нажми меня. Я переверну заголовок</button>
      </div>
      <div className={styles.box_button_2}>

      </div>
      <div className={styles.box_button_3}>

      </div>
      <div className={styles.box_button_4}>

      </div>
      
    </div>
  );
}

export default ContainerButtons;
