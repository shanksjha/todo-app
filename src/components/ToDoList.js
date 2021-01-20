import React from 'react'

class ToDoList extends React.Component{
    
    state = {
        todo_status: false
    }

    componentWillMount(){
        
        this.setState({
            todo_status:this.props.todo.todo_status
        })
    }

    handleClick = (event) =>{
        
        this.setState(prevState => ({
            todo_status: ! prevState.todo_status
        }))
        console.log(this.state.todo_status)
        this.props.handleClickList(this.props.todo.todo_id,this.state.todo_status)
    }

  render(){
  return (
    <div onClick={this.handleClick} className="to-do-list-container">
      <h3 className={this.state.todo_status ? "completed-list" : "to-do-list"}>{this.props.todo.todo_name}{this.state.todo_status ? "  ✔️" : null}</h3>
    </div>
  )
}
}


export default ToDoList
