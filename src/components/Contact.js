import React from 'react';
import classes from './Contact.module.css';

function Contact() {
  return <div className={classes.contact}>
      <h2 className={classes.header}>BOOK YOUR TABLE</h2>
      <div className={classes.formbody}>
          <form className={classes.form}>
              <input type="text" className={classes.formItem} placeholder="Name"></input>
              <input type="email" className={classes.formItem} placeholder="email"></input>
              <textarea className={classes.formItem} placeholder="Enter your message here" rows={5}></textarea>
              <button type='submit' className={classes.button}>Submit</button>
          </form>
      </div>
  </div>;
}

export default Contact;
