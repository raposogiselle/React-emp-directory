import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SearchBar = (props) => {
    
    return (
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
            style={{height: 40}} 
            variant="primary" 
            type="submit"
            onClick={ this.handleSubmit }
          >
            Search
          </Button>
        </Form>
    );
}

export default SearchBar;