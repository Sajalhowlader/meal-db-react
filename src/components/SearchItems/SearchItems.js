import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './SearchItems.css'

const SearchItems = () => {
    return (
        <div>
            <div className="my-5">
                <>
                    <InputGroup className="mb-3 w-50 mx-auto">
                        <FormControl className='from-search'
                            placeholder="Search Your Food"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2" className='from-search-tow'>Search</InputGroup.Text>
                    </InputGroup>

                </>
            </div>
        </div>
    );
};

export default SearchItems;