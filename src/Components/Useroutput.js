import '../App.css';
import React from 'react';

const Useroutput = (values) => {
    return(
        <div className="App">
            <p>
                You are in User name is <b>{values.name} !</b> 
            </p>
            <p>
               <button className="btn btn-lg btn-danger" onClick={values.click}>Change User Name</button>
            </p>
        </div>
    )
}
export default Useroutput;