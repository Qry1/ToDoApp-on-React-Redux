import React from 'react';

import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import List from '../List/List';
import Input from '../Input/Input';

import { connect } from 'react-redux';

import { addItem, 
         removeItem, 
         toggleImportant, 
         toggleDone, 
         changeFilter, 
         sortByName,
         sortByDate,
         checkByDate } from '../../action/action';

import './App.css';

class App extends React.Component {

  addTask = (date, label) => {
    const { addItem } = this.props;
    addItem(date, label, false, false, Math.floor(Math.random() * 1000));
  };

  onCheckDate = (payload) => {
    const { checkByDate } = this.props;
    checkByDate(payload);
  }

  checkDate(items, payload) {
    if(payload.length === 0) {
      return items;
    };
    return items.filter((item) => {
      return item.date === payload;
    });
  }

  onSearch = (terms) => {
    const { changeFilter } = this.props;
    changeFilter(terms);
  };

  search(items, terms) {
    if(terms.length === 0) {
      return items;
    };
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(terms.toLowerCase()) > -1;
    });
  };

  render() {
    
    const { tasks, 
            removeItem, 
            toggleImportant, 
            toggleDone, 
            filter, 
            sortByName, 
            sortByDate,
            check } = this.props;

    const searchedData = this.search(this.checkDate(tasks, check), filter);
    
    return (
      <div className='app'>
        <Header />
        <Menu
          onSearch={this.onSearch}
          sortByName={sortByName}
          sortByDate={sortByDate}
          onCheckDate={this.onCheckDate} />
        <List 
          data={searchedData}
          removeItem={removeItem}
          toggleImportant={toggleImportant}
          toggleDone={toggleDone} />
        <Input addItem={this.addTask}/>
      </div>
    );
  };
};

const mapStateToProps = ({ tasks, filter, check }) => ({
  tasks,
  filter,
  check   
});

export default connect(mapStateToProps, { addItem, 
                                          removeItem, 
                                          toggleImportant, 
                                          toggleDone, 
                                          changeFilter, 
                                          sortByName,
                                          sortByDate,
                                          checkByDate })(App);


