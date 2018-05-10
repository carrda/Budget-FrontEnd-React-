import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import {connect } from 'react-redux'

/* import './App.css'; */

class Travel extends Component {

    constructor(props){
        super(props)
        this.state={
            title: '',
            destination: '',
            month: '',
            days: 0,
            mileage: 0
        }
    }

    handleChangeTitle = (event) => {
        this.setState({title:event.target.value})
    }

    handleChangeDestination = (event) => {
        this.setState({destination:event.target.value})
    }

    handleChangeMonth = (event) => {
        this.setState({month:event.target.value})
    }

    handleChangeDays = (event) => {
        this.setState({days:event.target.value})
    }

    handleChangeMileage = (event) => {
        this.setState({mileage:event.target.value})
    }

  render() {
    return (
      <div>

        <Table bordered striped condensed>
            <thead>
          <tr>
            <th>#</th>  
            <th className="header1">Title</th>
            <th>Destination</th> 
            <th>Jan</th>
            <th>Feb</th>
            <th>Mar</th>
            <th>Apr</th>
            <th>May</th>
            <th>Jun</th>
            <th>Sub Total</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>1</td>
            <td>Payload Review</td>
            <td>Orlando</td> 
            <td></td>
            <td>$1500</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>$1500</td>
            <td>X</td>
          </tr>
          <tr>
          <td>2</td>
          <td>Boondoggle</td>
            <td>Huntsville</td> 
            <td></td>
            <td></td>
            <td></td>
            <td>$4444</td>
            <td></td>
            <td></td>
            <td></td>
            <td>X</td>
          </tr>
          </tbody>
        </Table>


        <label>Title</label>
        <input type='text' value={this.state.title} onChange={this.handleChangeTitle}></input>
        <br />
        <label>Destination</label>
        <input type='text' value={this.state.destination} onChange={this.handleChangeDestination}></input>
        <br />
        <label>Month</label>
        <input type='text' value={this.state.month} onChange={this.handleChangeMonth}></input>
        <br />
        <label>Number of Days</label>
        <input type='number' value={this.state.days} onChange={this.handleChangeDays}></input>
        <br />
        <label>Mileage</label>
        <input type='number' value={this.state.mileage} onChange={this.handleChangeMileage}></input>
        <br />

                <Button onClick={()=> this.props.onSaveTravel(this.state.title, this.state.destination, this.state.month, this.state.days, this.state.mileage)}>Submit</Button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
    return{
      onSaveTravel : (title,destination,month,days,mileage) => dispatch({type:'SAVE_TRAVEL', payload : {title:title, destination:destination, month:month, days:days, mileage:mileage}})
          
    }
  }
  
  export default connect(null, mapDispatchToProps) (Travel);