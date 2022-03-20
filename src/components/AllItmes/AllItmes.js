import React, { useEffect, useState } from 'react';
import LodeItems from '../LodeItems/LodeItems';

const AllItmes = () => {
    const [allitems, setAllItmes] = useState([])
    // const { } = allitems
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setAllItmes(data.categories))
    }, [])
    return (
        <div>
            <h1 className='my-5'>OUR ALL ITEMS</h1>
            <div className='row container mx-auto'>
                {
                    allitems.map(item =>
                        <LodeItems sendItems={item} key={item.idCategory}>

                        </LodeItems>
                    )
                }
            </div>
        </div>
    );
};

export default AllItmes;