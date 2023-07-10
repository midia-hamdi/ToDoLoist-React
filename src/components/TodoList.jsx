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
        this.handleDelete = this.handleDelete.bind(this)
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

    handleDelete(index) {
        this.setState((state) => {
          const updatedTodo = [...state.todo];
          updatedTodo.splice(index, 1);
          return {
            ...state,
            todo: updatedTodo
          };
        });
      }

  render() {
    return (
    <div className='todolist'>

        <Form  handleSubmit={this.handleSubmit} />
        <Todo todos={this.state.todo}  handleDelete={this.handleDelete}/>

    </div>
    )
  }
}
