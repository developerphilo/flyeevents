import React from 'react';
const Form = ({handleInput,Search}) =>{
    return(
            <div>
                  <input 
                  type="text"
                  placeholder="Search Event ... "
                  onChange={handleInput}
                  onKeyPress={Search}  
                  required="required"              
                  />
                  <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
    )

}

export default Form;