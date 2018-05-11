import React, { Component } from 'react';
import { Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux';

/* import './App.css'; */

class Materials extends Component {

    constructor(props){
        super(props)
        this.state={
            titlem: '',
            description: '',
            monthm: '',
            cost: 0
        }
    }
    
    handleChangeTitleM = (event) => {
        this.setState({titlem:event.target.value})
    }
    
    handleChangeDescription = (event) => {
        this.setState({description:event.target.value})
    }
    
    handleChangeMonthM = (event) => {
        this.setState({monthm:event.target.value})
    }
    
    handleChangeCost = (event) => {
        this.setState({cost:event.target.value})
    }

  render() {

    let materialsTotal = 0;
    let materialItems = this.props.userInput.map((materials,index) => {
        let lineTotal = 0;
        let costm1 = 0;
        let costm2 = 0;
        let costm3 = 0;
        let costm4 = 0;
        let costm5 = 0;
        let costm6 = 0;

        if (materials.monthm === "Jan") {
            costm1 = Number(materials.cost);
        }
        else if (materials.monthm === "Feb") {
            costm2 = Number(materials.cost);
        }
        else if (materials.monthm === "Mar") {
            costm3 = Number(materials.cost);
        }
        else if (materials.monthm === "Apr") {
            costm4 = Number(materials.cost);
        }
        else if (materials.monthm === "May") {
            costm5 = Number(materials.cost);
        }
        else if (materials.monthm === "Jun") {
            costm6 = Number(materials.cost);
        }
        lineTotal = costm1 + costm2 + costm3 + costm4 + costm5 + costm6;
        materialsTotal += lineTotal;
        if (materials.titlem !== undefined){
        return (
            <tr key = {index}>
              <td> {index} </td>
              <td>{materials.titlem}</td>
              <td>{materials.description }</td>
              <td>{costm1}</td>
              <td>{costm2}</td>
              <td>{costm3}</td>
              <td>{costm4}</td>
              <td>{costm5}</td>
              <td>{costm6}</td>
              <td>{lineTotal}</td>
            </tr>
          )
        }
        else{
            return '';
        }
        })  //end of map
    
    return (

      <div>
        Materials total: {materialsTotal}<br/>
        <Table striped bordered condensed>
          <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th> 
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
              {materialItems}
          </tbody>
        </Table>


        <label>Title</label>
        <input type='text' value={this.state.titlem} onChange={this.handleChangeTitleM}></input>
        <br />
        <label>Description</label>
        <input type='text' value={this.state.description} onChange={this.handleChangeDescription}></input>
        <br />
        <label>Month</label>
        <input type='text' value={this.state.monthm} onChange={this.handleChangeMonthM}></input>
        <br />
        <label>Cost</label>
        <input type='number' value={this.state.cost} onChange={this.handleChangeCost}></input>
        <br />

        <Button onClick={()=> this.props.onSaveMaterials(this.state.titlem, this.state.description, this.state.monthm, this.state.cost)}>Submit</Button>

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
      onSaveMaterials : (titlem,description,monthm,cost) => dispatch({type:'SAVE_MATERIALS', payload : {titlem:titlem, description:description, monthm:monthm, cost:cost}})
          
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps) (Materials);