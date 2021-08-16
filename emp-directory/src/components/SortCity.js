import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';

const SortName = (props) => {

    const handleSortCityAz = () => {
        props.sortEmployeesByCityAz()
        console.log('sorting city az');
    }

    const handleSortCityZa = () => {
        props.sortEmployeesByCityZa()
        console.log('sorting city za');
    }

    return (
        <div className='sort-div'>
            <div className='mb-2 d-flex py-2 flex-row'>
                <Dropdown>
                    <Dropdown.Toggle size="sm" variant="secondary" style={{height: 32, color: 'white', background: 'cornflowerblue'}} id="dropdown-basic">
                        Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as='button' onClick={ handleSortCityAz }>City: A-Z</Dropdown.Item>
                        <Dropdown.Item as='button' onClick={ handleSortCityZa }>City: Z-A</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default SortName;