import React from 'react'

function Poll({data}) {
  console.log("DATA", data)
  return (
    <>    
      <div>   User: {data.username}</div>
      <div> Comment: {data.response}</div>
      <div> Likes: {data.numUpvotes} </div>
    </>


  )
}

export default Poll