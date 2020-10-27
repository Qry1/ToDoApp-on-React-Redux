import React from 'react';

import './Item.css'

export default class Item extends React.Component {
  
  render() {

    const { date, label, done, important, id, removeItem, toggleImportant, toggleDone } = this.props;
    
    let classNames = 'item';

    if(done) {
      classNames += ' done';
    };

    if(important) {
      classNames += ' important';
    }; 

    return (
      <div className={classNames}>
        <div onClick={() => toggleDone(id)}>
          <span 
            className='item-date'>
            {date}
          </span>
          <span 
            className='item-text'>
            {label}
          </span>
        </div>
        <div>
          <button 
            className='button-imp'
            onClick={() => toggleImportant(id)}>
            !
          </button>
          <button 
            className='button-del'
            onClick={() => removeItem(id)}>
            DEL
          </button>
        </div>
      </div>
    );
  };
};