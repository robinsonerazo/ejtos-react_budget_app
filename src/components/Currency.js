import React, { useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';

const SelectCurrency = ( ) => {
      const { dispatch , currency } = useContext(AppContext);
      const [currentCurrency, setCurrency] = useState(currency);
    
      console.log(currentCurrency);
                  
      const submitEvent = (event) => {
            setCurrency(event);

            dispatch({
                  type: 'CHG_CURRENCY',
                  payload: currentCurrency,
            });                                          
      };           
                              
    
    
    return (
      <div>
            <div className='row' >
                  <div className="input-group mb-3" >
                        <div className="input-group-prepend" >
                              <label className="input-group-text" htmlFor="inputGroupSelect01" 
                              style={{background: '#ACE1AF' , marginLeft: '0.1rem' , size: 10}}>
                                    <select className="custom-select" id="inputGroupSelect01" 
                                    style={{background: '#ACE1AF' , margin: '2rem' , size: 10}} onChange={(event) => { submitEvent(event.target.value) } }>
                                          <option value="$" name="dollar">$ Dollar</option>
                                          <option value="£" name="pound">£ Pound</option>
                                          <option value="€" name="euro">€ Euro</option>
                                          <option value="₹" name="ruppee">₹ Ruppee</option>
                                    </select>
                              </label>               
                        </div>    
                  </div>
            </div>
      </div>
    );
};

export default SelectCurrency;
