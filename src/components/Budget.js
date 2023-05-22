import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useState } from 'react';

const Budget = () => {
    const { budget } = useContext(AppContext);
    //const [cost, setCost] = useState('');
    const { setBudget } = useState('');

    return (
        <div className = 'alert alert-secondary'>
            <span>
                Budget: £<input
                    required='required'
                    type='number'
                    id='budget'
                    value={ budget }
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>

            </span>

            
        </div>

        


    );
};

export default Budget;
