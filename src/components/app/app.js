import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John', salary: 800, increase: false, id: 1 },
        { name: 'Lay', salary: 3000, increase: true, id: 2 },
        { name: 'Mike', salary: 15800, increase: false, id: 3 }
      ]
    }
  }

  maxId = () => {
    return this.state.data.length
      ? Math.max(...this.state.data.map(item => item.id))
      : 0;
  };

  addEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary: Number(salary),
      increase: false,
      id: this.maxId() + 1
    };

    this.setState(({ data }) => ({
      data: [...data, newEmployee]
    }));
  };


  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm 
          onAdd={this.addEmployee}/>
      </div>
    );
  }
}

export default App;
