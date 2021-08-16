import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const SortName = (props) => {

    const handleSortFirstNameAz = () => {
        props.sortEmployeesByFirstNameAz()
        console.log('buonasera');
    }

    const handleSortFirstNameZa = () => {
        props.sortEmployeesByFirstNameZa()
        console.log('sorting first za');
    }

    const handleSortLastNameAz = () => {
        props.sortEmployeesByLastNameAz()
        console.log('ciao');
    }

    const handleSortLastNameZa = () => {
        props.sortEmployeesByLastNameZa()
        console.log('hola');
    }

    return (
        <div className='sort-div'>
            <div className='mb-2 py-2 d-flex flex-row'>
                <Dropdown>
                    <Dropdown.Toggle size="sm" variant="secondary" style={{height: 32, color: 'white', background: 'cornflowerblue'}} id="dropdown-basic">
                        Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as='button' onClick={ handleSortFirstNameAz }>First Name: A-Z</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortFirstNameZa }>First Name: Z-A</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortLastNameAz }>Last Name: A-Z</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortLastNameZa }>Last Name: Z-A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default SortName;