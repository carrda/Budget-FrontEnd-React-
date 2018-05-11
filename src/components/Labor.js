import React, { Component } from 'react';
import { Table,Button } from 'react-bootstrap';
import {connect } from 'react-redux'

/* import './App.css'; */

class Labor extends Component {

  constructor(props){
    super(props)
    this.state={
        name: '',
        category: '',
        month1rate: 0,
        month2rate: 0,
        month3rate: 0,
        month4rate: 0,
        month5rate: 0,
        month6rate: 0
    }
}

handleChangeName = (event) => {
    this.setState({name:event.target.value})
}

handleChangeCategory = (event) => {
    this.setState({category:event.target.value})
}

handleChangeMonth1Rate = (event) => {
    this.setState({month1rate:event.target.value})
}

handleChangeMonth2Rate = (event) => {
    this.setState({month2rate:event.target.value})
}

handleChangeMonth3Rate = (event) => {
  this.setState({month3rate:event.target.value})
}

handleChangeMonth4Rate = (event) => {
  this.setState({month4rate:event.target.value})
}

handleChangeMonth5Rate = (event) => {
  this.setState({month5rate:event.target.value})
}

handleChangeMonth6Rate = (event) => {
  this.setState({month6rate:event.target.value})
}
  render() {
    let lineLaborTotal = 0;
    let laborTotal = 0;

    let laborItems = this.props.userInput.map((labor,index) => {
      let cost1 = 0;
      let cost2 = 0
      let cost3 = 0;
      let cost4 = 0;
      let cost5 = 0;
      let cost6 = 0;
      if (labor.category === "Engr1") {
      cost1 = 10000 * labor.month1rate;
      cost2 = 10000 * labor.month2rate;
      cost3 = 10000 * labor.month3rate;
      cost4 = 10000 * labor.month4rate;
      cost5 = 10000 * labor.month5rate;
      cost6 = 10000 * labor.month6rate;
      }
      else if (labor.category === "Engr2") {
      cost1 = 12000 * labor.month1rate;
      cost2 = 12000 * labor.month2rate;
      cost3 = 12000 * labor.month3rate;
      cost4 = 12000 * labor.month4rate;
      cost5 = 12000 * labor.month5rate;
      cost6 = 12000 * labor.month6rate;  
      }

      lineLaborTotal = Number(cost1) + Number(cost2) + Number(cost3) + Number(cost4) + Number(cost5) + Number(cost6)
        
      laborTotal += lineLaborTotal

      if (labor.name !== undefined){

      return (
        <tr key = {index}>
          <td> {index} </td>
          <td>{labor.name}</td>
          <td>{labor.category}</td>
          <td>{cost1}</td>
          <td>{cost2}</td>
          <td>{cost3}</td>
          <td>{cost4}</td>
          <td>{cost5}</td>
          <td>{cost6}</td>
          <td>{lineLaborTotal}</td>
        </tr>
      )
      }

      else {
        return ''
      }
  }
  )
    return (
      <div>
        Labor total: {laborTotal}<br/>
        <Table striped bordered condensed>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th> 
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
          {laborItems}
          </tbody>
        </Table>

        <label>Name</label>
        <input type='text' value={this.state.name} onChange={this.handleChangeName}></input>
        <br />
        <label>Category</label>
        <input type='text' value={this.state.category} onChange={this.handleChangeCategory}></input>
        <br />
        <label>Month1 Rate</label>
        <input type='number' value={this.state.month1rate} onChange={this.handleChangeMonth1Rate}></input>
        <br />
        <label>Month2 Rate</label>
        <input type='number' value={this.state.month2rate} onChange={this.handleChangeMonth2Rate}></input>
        <br />        
        <label>Month3 Rate</label>
        <input type='number' value={this.state.month3rate} onChange={this.handleChangeMonth3Rate}></input>
        <br />
        <label>Month4 Rate</label>
        <input type='number' value={this.state.month4rate} onChange={this.handleChangeMonth4Rate}></input>
        <br />
        <label>Month5 Rate</label>
        <input type='number' value={this.state.month5rate} onChange={this.handleChangeMonth5Rate}></input>
        <br />
        <label>Month6 Rate</label>
        <input type='number' value={this.state.month6rate} onChange={this.handleChangeMonth6Rate}></input>
        <br />

        <Button onClick={()=> this.props.onSaveLabor(this.state.name, this.state.category, this.state.month1rate, this.state.month2rate, this.state.month3rate, this.state.month4rate, this.state.month5rate, this.state.month6rate)}>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    userInput: state.userInput
  }
}

const mapDispatchToProps = dispatch => {
  return{
    onSaveLabor : (name,category,month1rate,month2rate,month3rate,month4rate,month5rate,month6rate) => dispatch({type:'SAVE_LABOR', payload : {name: name,category:category, month1rate:month1rate, month2rate:month2rate, month3rate:month3rate, month4rate:month4rate, month5rate:month5rate, month6rate:month6rate}})
        
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Labor);