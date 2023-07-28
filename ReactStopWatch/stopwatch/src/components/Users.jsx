import React from 'react'
import {useParams} from 'react-router-dom'


function Users() {
  const params =  useParams();
  const userId = params.userId
  return (
    <div>
        <h1>User {userId}</h1>
        
    </div>
  )
}

export default Users