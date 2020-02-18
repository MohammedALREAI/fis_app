import React from 'react'

import updateItem from'../components/UpdateItem'
 const  Update=({query})=> {
  return (
    <div>
      <updateItem id= {query.id}/>

    </div>
  )
}

export default Update
