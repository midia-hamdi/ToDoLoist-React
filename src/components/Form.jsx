import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props){
    super(props);
    this.state= {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(){
    this.props.handleSubmit(this.state.input);
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div  className="header">
          <input type="text" id="myInput" value={this.state.input} onChange={this.handleChange} placeholder="Title..." />
          {/* <button onClick={() => {
            this.setState({
              todo: [this.state.text,...this.handleSubmit]
            })

          }} className="addBtn">add</button> */}
          <button onClick={this.handleSubmit} className="addBtn">add</button>
      </div>
    )
  }
}


