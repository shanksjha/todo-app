import { render } from '@testing-library/react'
import React from 'react'
import ToDoCard from '../components/ToDoCard'

function ToDoCardContainer(props){

function rendercards(){
    
    return props.buckets.map(bucket => {
        return <ToDoCard key={bucket.bucket_id} handleClickList={props.handleClickList} addList={props.addList} bucket={bucket}/>
    })
}
return (

    <div>
        {rendercards()}
    </div>
)
}

export default ToDoCardContainer