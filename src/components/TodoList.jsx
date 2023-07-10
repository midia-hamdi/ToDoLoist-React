import React, { Component } from 'react'
import Form from './Form'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props){
    super(props);
    this.state = {
        title: 'Add Task',

        todo : [

        ]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(message){
        this.setState(state => {
            return {
                ...state,
                todo: [
                    ...state.todo,
                    {message }
                ]
                
            }
        })
    }

  render() {
    return (
    <div className='todolist'>

        <Form  handleSubmit={this.handleSubmit} />
        <Todo todos={this.state.todo} />

    </div>
    )
  }
}
