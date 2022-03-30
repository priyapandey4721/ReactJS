import React from 'react'

function Column() {
    const items =["PRiya","Komal","Preeti"]
  return (
    <>
        {/* {
            items.map(item => (
                <React.Fragment key ={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        } */}
        <td>Name</td>
        <td>Priya</td>
    </>
  )
}

export default Column