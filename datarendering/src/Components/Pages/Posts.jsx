import React, { useEffect, useState } from 'react'

function Posts() {
   const [posts, setPost] = useState([])

   useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response => response.json()))
      .then(data => setPost(data))
      .catch(err => console.log(err))
   },[])
  return (
    <div>
      
       {
        posts.map((item) =>(
        <div>
           <h1>{item.title}</h1>
           <p>{item.body}</p>
        </div>
        
        ))
       }
      

       
       
    </div>
  )
}

export default Posts