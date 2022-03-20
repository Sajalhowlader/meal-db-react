import React from 'react';
import './LodeItems.css'

const LodeItems = (props) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props.sendItems
    return (
        <div className='col-md-4'>
            <div className='items-cart'>
                <img src={strCategoryThumb} alt="" />
                <h2>{strCategory}</h2>
                <p>{strCategoryDescription.slice(0, 100)}</p>
            </div>
        </div>
    );
};

export default LodeItems;