import React from 'react'

function Listitem(props) {
    const {habit,deleteHabit,id,count} = props;

    
    const completed = () => {
        let days= 0;
        for (const key in count) {
            if (count[key] === true) {
                days++;
            }
        }
        return days;
    }

    const completedDays = completed();


    const deleteHabitHandler = () => {
        deleteHabit(id);
    }

  return (
    <>
        <div className="list-item py-2 border-bottom d-flex justify-content-between align-items-center mt-2">
            
            <div className="d-flex flex-column w-25">
                <div className="list-item__title "><h4>{habit}</h4></div>
            </div>

            <div>
                <span>Completed: </span> <span >{completedDays}</span>
                 / <span>7</span>
            </div>

            <div className="list-item__actions">
                <button className="btn btn-primary">Detail View</button>
                <button onClick={deleteHabitHandler} className="btn btn-danger mx-1">Delete</button>
            </div>
        </div>
    </>
  )
}

export default Listitem