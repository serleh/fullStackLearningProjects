import React from 'react'

function Home() {
   
  const aa = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Handle the data retrieved from the API
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the API call
    console.error('Error occurred:', error);
  });
  return (
    <div>
      <h1>Welcome  to home </h1>
    </div>
  )
}

export default Home