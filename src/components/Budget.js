import React, { useContext, useEffect , useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , remaining , expenses , currency} = useContext(AppContext);
    const [currentBudget , setBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    useEffect(() => {
        setBudget(currentBudget);
    } , [budget]);

    const handleBudgetChange = (event) => {
        const value = event.target.valueAsNumber;
        if (value <= totalExpenses) { 
            alert("You cannot reduce the budget value lower than the spending");
        } else if (value <= 20000) {
            //console.log(value);
            //console.log(totalExpenses);
            setBudget(value);
        } else {
            alert(`The value cannot exceed remaing funds £ ${remaining}`);
        }
    };

    return (
        <div className = 'alert alert-secondary'>
            <span>
                Budget: {currency}<input
                    required = 'required'
                    type = 'number'
                    id = 'budget'
                    value = {currentBudget}
                    style = {{ marginLeft: '2rem' , size: 10}}
                    onChange = {handleBudgetChange}>
                </input>
            </span>  
        </div>
    );
};

export default Budget;
