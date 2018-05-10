import React, { Component } from 'react';
import { Table, Button} from 'react-bootstrap';
import { connect } from 'react-redux'

/* import './App.css'; */

const columnOne = {
    width: 10
}

const wordWrapStyle = {
    width: 100
}

class Materials extends Component {

    constructor(props){
        super(props)
        this.state={
            titlem: '',
            description: '',
            month: '',
            cost: 0
        }
    }
    
    handleChangeTitleM = (event) => {
        this.setState({titlem:event.target.value})
    }
    
    handleChangeDescription = (event) => {
        this.setState({description:event.target.value})
    }
    
    handleChangeMonth = (event) => {
        this.setState({month:event.target.value})
    }
    
    handleChangeCost = (event) => {
        this.setState({cost:event.target.value})
    }

  render() {
    return (
      <div>

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
          <tr>
            <td style={columnOne}>1</td>
            <td>Anti-gravity</td>
            <td style={wordWrapStyle}>Amazing machine, and really amazing, stupendous, will this wrap?</td> 
            <td></td>
            <td></td>
            <td></td>
            <td>$66666666</td>
            <td></td>
            <td></td>
            <td>$66666666</td>
            <td>X</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Relaxation</td>
            <td>Margarita Machine</td> 
            <td>$400</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>$400</td>
            <td>X</td>
          </tr>
          </tbody>
        </Table>

        <label>Title</label>
        <input type='text' value={this.state.titlem} onChange={this.handleChangeTitleM}></input>
        <br />
        <label>Description</label>
        <input type='text' value={this.state.description} onChange={this.handleChangeDescription}></input>
        <br />
        <label>Month</label>
        <input type='text' value={this.state.month} onChange={this.handleChangeMonth}></input>
        <br />
        <label>Cost</label>
        <input type='number' value={this.state.cost} onChange={this.handleChangeCost}></input>
        <br />

        <Button onClick={()=> this.props.onSaveMaterials(this.state.titlem, this.state.description, this.state.month, this.state.cost)}>Submit</Button>

      </div>


    )
  }
  
}

const mapDispatchToProps = dispatch => {
    return{
      onSaveMaterials : (titlem,description,month,cost) => dispatch({type:'SAVE_MATERIALS', payload : {titlem:titlem, description:description, month:month, cost:cost}})
          
    }
  }
  
  export default connect(null, mapDispatchToProps) (Materials);