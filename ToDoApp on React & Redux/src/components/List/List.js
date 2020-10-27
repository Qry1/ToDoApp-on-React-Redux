import React from 'react';

import Item from '../Item/Item'

import './List.css'

export default class List extends React.Component {

  render() {

    const { data, removeItem, toggleImportant, toggleDone } = this.props;
    
    const elements = data.map(({ date, label, important, done, id}) => {
      
      return (
        <li key={id}>
          <Item 
            date={date}
            label={label}
            important={important}
            done={done}
            id={id}
            removeItem={removeItem}
            toggleImportant={toggleImportant}
            toggleDone={toggleDone} />
        </li>
      );
    });
  
    return (
      <ul 
        className='list'>
        {elements}
      </ul>
    );
  };
};