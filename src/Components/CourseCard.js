import React, {Component} from 'react';
import ReactLogo from '../Images/React.jpg';
import './Header.css';

export default class CourseCard extends Component {
    constructor(props){
       
        
        super()
    }
    render() {
        const cardHeader = {
            width:"18rem"
        }
        
        return(
           
           <div className="container-fluid">
                    <div className="row">
                        {this.props.courseList.map((val, i) =>
                            <div className="card cardHeader col-lg-4 col-sm-12 col-md-6 mt-4">
                                <img className="card-img-top" src={val.imageUrl} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{val.courseName}</h5>
                                    <p className="card-text">{val.descriptionofCourse}</p>
                                    
                                </div>
                                <div className="card-footer tl-Cent">
                                    <a href="#" className="btn btn-primary">Learn {val.courseName}</a>
                                </div>
                            </div>
                        )}
                        </div>
             
           </div> 
            
            
        )
    }
}