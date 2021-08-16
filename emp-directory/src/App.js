import React from "react";
import './App.css';
import API from "./components/utils/API";
import SortName from "./components/SortName"
import SortCity from './components/SortCity';
import Title from "./components/Title"
import Table from "react-bootstrap/Table";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class App extends React.Component {
  state = {
    error: "",
    employees: [],
    search: "",
    filteredEmployees: []
  };

  componentDidMount() {
    API.getEmployees()
      .then(res => {
        console.log( res.data.results );
        this.setState({ 
          employees: res.data.results,
          filteredEmployees: res.data.results,
        });
      })
      .catch(err => console.log(err)); 
  }

  formatDate(date) {
    const dateArray = date.split("-");
    console.log(dateArray);
    const year = dateArray[0];
    const month = dateArray[1];
    const dayArray = dateArray[2].split("T");
    const day = dayArray[0];
    const formattedDate = [month, day, year].join("/");
    return formattedDate;
  }

  filterEmployees = () => {
    const employees = this.state.employees.filter( employee => employee.dob.age < 50);
    this.setState({ employees });
  }

  sortEmployeesByFirstNameAz = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.first > b.name.first) ? 1 : ((b.name.first > a.name.first) ? -1 : 0));
    this.setState({ employees });
  };

  sortEmployeesByFirstNameZa = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.first < b.name.first) ? 1 : ((b.name.first < a.name.first) ? -1 : 0));
    this.setState({ employees });
  };

  sortEmployeesByLastNameAz = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0));
    this.setState({ employees });
  };
  
  sortEmployeesByLastNameZa = () => {
    const employees = this.state.employees.sort((a,b)=>(a.name.last < b.name.last) ? 1 : ((b.name.last < a.name.last) ? -1 : 0));
    this.setState({ employees });
  };

  sortEmployeesByCityAz = () => {
    const employees = this.state.employees.sort((a,b)=>(a.location.city > b.location.city) ? 1 : ((b.location.city > a.location.city) ? -1 : 0));
    this.setState({ employees });
  };

  sortEmployeesByCityZa = () => {
    const employees = this.state.employees.sort((a,b)=>(a.location.city < b.location.city) ? 1 : ((b.location.city < a.location.city) ? -1 : 0));
    this.setState({ employees });
  };

  searchEmployees = event => {
    console.log(this.state.search);
    const filter = this.state.search;
    const filteredList = this.state.employees.filter(item => {
      let values = Object.values(item)
        .join("")
        .toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredList });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.searchEmployees();
    };
  
  handleReset = event => {
    event.preventDefault();
    this.setState({ filteredEmployees: this.state.employees });
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    };

  mapEmployeeRows = () => {
    return this.state.filteredEmployees.map( employee => (
      <tr key={employee.phone}>
          <th>{employee.name.first} {employee.name.last}</th>
          <th><img src={employee.picture.large} alt={employee.name.first} /></th>
          <th>{employee.location.city}, {employee.location.state}</th>
          <th>{this.formatDate(employee.dob.date)}</th>
          <th>{employee.dob.age}</th>
      </tr>
    ))
  }

render() {
  return (
      <div>
        <header>
          <h1>GR Employee Directory</h1>
          <p>Scroll through the employee list below, use the sort to organize, and the search field to find specific employees.</p>
        </header>
        <div className='d-flex align-items-baseline justify-content-start ml-3'>
          <Form className="d-flex align-items-center">
            <Form.Group className="pb-3" controlId="employeeSearch">
              <Form.Label>Search Employee by Name</Form.Label>
              <Form.Control 
                type="text"
                value={this.state.search}
                name="search"
                onChange={this.handleInputChange} 
                placeholder="Enter name" />
            </Form.Group>
            <Button 
              className="ml-2" 
              style={{height: 40, color: 'white', background: 'cornflowerblue'}} 
              variant="secondary" 
              type="submit"
              size="sm"
              onClick={ this.handleSubmit }
            >
              Search
            </Button>
            <Button 
              className="ml-2" 
              style={{height: 40, color: 'white', background: 'cornflowerblue'}} 
              variant="secondary" 
              type="submit"
              size="sm"
              onClick={ this.handleReset }
            >
              Reset
            </Button>
          </Form>
        </div>
        <div className="container-fluid">
         <Table responsive striped bordered hover>
            <thead>
                <tr>
                  <th className="d-flex align-items-center justify-content-between">
                    Name
                    <SortName 
                      sortEmployeesByFirstNameAz={ this.sortEmployeesByFirstNameAz }
                      sortEmployeesByFirstNameZa={ this.sortEmployeesByFirstNameZa }
                      sortEmployeesByLastNameAz={ this.sortEmployeesByLastNameAz }
                      sortEmployeesByLastNameZa={ this.sortEmployeesByLastNameZa }
                    />
                  </th>
                  <th className="pb-4">Image</th>
                  <th className="d-flex align-items-center justify-content-between">
                    Location
                    <SortCity 
                      sortEmployeesByCityAz={ this.sortEmployeesByCityAz }
                      sortEmployeesByCityZa={ this.sortEmployeesByCityZa }
                    />
                  </th>
                  <th className="pb-4">DOB</th>
                  <th className="pb-4">Age</th>
                </tr>
            </thead>
            <tbody>
                {this.mapEmployeeRows() }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

  



export default App;
