import React from 'react'

function Listitem(props) {
    const {habit} = props;

  return (
    <>
        <div className="list-item py-2 border-bottom d-flex justify-content-between align-items-center mt-2">
            
            <div className="d-flex flex-column">
                <div className="list-item__title "><h4>{habit}</h4></div>
            </div>

            <div>
                <span>Completed: </span> <span >0</span> / <span>7</span>
            </div>

            <div className="list-item__actions">
                <button className="btn btn-primary">Detail View</button>
            </div>
        </div>
    </>
  )
}

export default Listitem