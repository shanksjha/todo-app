import React from 'react';

class CreateBucket extends React.Component{
    state = {
        input:''
    }

    handleInput = (event) => {
        event.persist()
        this.setState({
            input : event.target.value
        })
    }

    handleNewCard = (event)=>{
        event.preventDefault()
        this.props.createNewBucket(this.state.input)
    }

    render(){
        return (

            <form onSubmit = {this.handleNewCard}  className='new-card-form'>
                <h4>Create Bucket</h4>
            <input  onChange ={this.handleInput} className ='new-card-input'  type="text" value={this.state.input}/>
            <input className ="new-card-input" type="submit" value="Create"/>
            </form>
        )
    }
}

export default CreateBucket;