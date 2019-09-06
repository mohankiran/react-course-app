import React, {Component} from 'react';
import './Header.css'
export default class Header extends Component {
    render() {
        return(
            <div>
               <nav className="navbar navbar-dark bg-dark">
                    <div className="container">
                        <div className="row header-mar">
                            <div className="headr-text">
                            <i className="fa fa-book" aria-hidden="true"></i> &nbsp; 
                               Online Tuotorials
                            </div>
                            
                        
                        </div>
                    </div>
               </nav>
            </div>
        )
    }
}