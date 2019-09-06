import React, {Component} from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';
import data from '../Services/courseDetails.json'
import FetchDetails from '../Services/FetchDetails';

export default class CourseDetails extends Component {
    constructor(){
        super()
        this.state = {
            courseDetails:[],
            isShow:true
        }
    }
   
    componentWillMount() {
        const jsonData = require('../Services/courseDetails.json');
      
        this.setState({courseDetails: jsonData})
        
       // this.setState({courseDetails : FetchDetails.getDetails()});
        // console.log("this.state--->",this.state);
        // axios.get(jsonData).then(values =>{
        //     console.log("values--->",values)
        // },error => {

        // })
        
    }
    render() {
        return(
            <div className="container-fluid">
                <CourseCard courseList={this.state.courseDetails} isShow={this.state.isShow}/>
            </div>
        )
    }
}