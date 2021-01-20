import React from 'react'
import CreateBucket from '../components/CreateBucket'
import ToDoCardContainer from './ToDoCardContainer'

export default class MainContainer extends React.Component{

    state = {
        buckets:[]
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/get_buckets")
        .then(resp => resp.json())
        .then(buckets => {
          console.log(buckets)
          this.setState({
            buckets: buckets
          })
        })
      }

    createNewBucket = (input) => {
        fetch("http://localhost:5000/api/create_bucket", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            bucket_name: input
          })
        })
        .then(resp => resp.json())
        .then(allBuckets => {
          this.setState({
            buckets: allBuckets
          })
        })
      }
    

      addList = (bucketId, input) => {
        fetch("http://localhost:5000/api/create_todo", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            to_do_name: input,
            bucket_id: bucketId,
            status: false
          })
        })
        .then(resp => resp.json())
        .then(allBuckets => {
          this.setState({
            buckets: allBuckets
          })
        })
      }
    
      handleClickList = (todo_id,todo_status) =>{
        console.log(todo_status)
        fetch(`http://localhost:5000/api/update_todo/${todo_id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            todo_status: todo_status
          })
        })
        .then(resp => resp.json())
        .then(allBuckets => {
          console.log(allBuckets)
          this.setState({
            buckets: allBuckets
          })
        })

      }

    render(){
        return (
            <div className="main-container">
              <ToDoCardContainer buckets={this.state.buckets} addList={this.addList} handleClickList={this.handleClickList}/>
            <CreateBucket createNewBucket={this.createNewBucket}/>
            
            </div>
        )
    }

}