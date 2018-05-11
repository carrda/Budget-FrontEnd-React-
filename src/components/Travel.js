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
    let travelTotal = 0;
    let lineTravTotal = 0;
    let travelItems = this.props.userInput.map((travel,index) => {

      let travel1 = 0;
      let travel2 = 0;
      let travel3 = 0;
      let travel4 = 0;
      let travel5 = 0;
      let travel6 = 0;

      if (travel.month === "Jan") {
          if (travel.destination === "Huntsville") {
              travel1 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
          }
          else if (travel.destination === "Orlando") {
            travel1 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
          }
        }
        else if (travel.month === "Feb") {
            if (travel.destination === "Huntsville") {
                travel2 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
            }
            else if (travel.destination === "Orlando") {
                travel2 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
            }
        }
        else if (travel.month === "Mar") {
            if (travel.destination === "Huntsville") {
                travel3 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
            }
            else if (travel.destination === "Orlando") {
                travel3 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
            }
        }
        else if (travel.month === "Apr") {
            if (travel.destination === "Huntsville") {
                travel4 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
            }
            else if (travel.destination === "Orlando") {
                travel4 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
            }
        } 
        else if (travel.month === "May") {
            if (travel.destination === "Huntsville") {
                travel5 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
            }
            else if (travel.destination === "Orlando") {
                travel5 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
            }
        }
        else if (travel.month === "Jun") {
            if (travel.destination === "Huntsville") {
                travel6 = ((travel.days - 1) * 100) + (travel.days * 50) +(travel.mileage * .5);
            }
            else if (travel.destination === "Orlando") {
                travel6 = ((travel.days - 1) * 120) + (travel.days * 60) +(travel.mileage * .5);
            }
        }
       
        lineTravTotal = Number(travel1) + Number(travel2) + Number(travel3) + Number(travel4) + Number(travel5) + Number(travel6)
        
        travelTotal += lineTravTotal

        if (travel.title !== undefined){
           
            return (
                <tr key = {index}>
                  <td> {index} </td>
                  <td>{travel.title}</td>
                  <td>{travel.destination}</td>
                  <td>{travel1}</td>
                  <td>{travel2}</td>
                  <td>{travel3}</td>
                  <td>{travel4}</td>
                  <td>{travel5}</td>
                  <td>{travel6}</td>
                  <td>{lineTravTotal}</td>
                </tr>
              )
            }
            else{
                return ''
            }
              
              
            } )    
         
    return (
      <div>
        Travel total: {travelTotal}<br/>
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
            {travelItems}
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

const mapStateToProps = state => {
    return {
        userInput: state.userInput
    }
}

const mapDispatchToProps = dispatch => {
    return{
      onSaveTravel : (title,destination,month,days,mileage) => dispatch({type:'SAVE_TRAVEL', payload : {title:title, destination:destination, month:month, days:days, mileage:mileage}})
          
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Travel);