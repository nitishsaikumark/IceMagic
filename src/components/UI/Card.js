import React from 'react';
import classes from './Card.module.css';

function Card(props) {
    const styles = `${classes.card} ` + props.className;
    console.log(styles);
  return <div className={styles}>{props.children}</div>;
}

export default Card;
