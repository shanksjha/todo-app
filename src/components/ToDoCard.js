import React from 'react';
import ToDoList from './ToDoList'


class ToDoCard extends React.Component{
    
    state = {
        input: ''
    }
    handleListInput = (event) =>{
        this.setState({
            input:event.target.value
        })
    }

    handleListSubmit = (event) => {
        event.preventDefault()
        this.props.addList(this.props.bucket.bucket_id, this.state.input)
        this.setState({
          input: ''
        })
      }
    
      handleClick = (todo_id,todo_status) =>{
          this.props.handleClickList(todo_id,todo_status)
      }

    
    renderTodos(){
        return this.props.bucket.todo_list.map(todo => {
            return <ToDoList key={todo.todo_id} handleClickList={this.handleClick} 
            bucketId={this.props.bucket.bucket_id} todo={todo}/>
        })
    }


    render(){
        return (
            <div className="to-do-card">
                <h4>{this.props.bucket.bucket_name}</h4>
                <form onSubmit={this.handleListSubmit}>
                    <input onChange={this.handleListInput} type="text" value ={this.state.input} />
                </form>
                {this.renderTodos()}
            </div>
        )
    }

}

export default ToDoCard