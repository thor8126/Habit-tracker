import React from 'react'
import {useState,useEffect} from 'react';

function Listitem(props) {
    const {deleteHabit,id,setActiveHabitHandler,name,count} = props;
    const deleteHabitHandler = () => {
        deleteHabit(id);
    }

    // count: {
    //     Monday:true,
    //     Tuesday:true,
    //     Wednesday:null,
    //     Thursday:null,
    //     Friday:null,
    //     Saturday:null,
    //     Sunday:null,
    //   }

    const [completed, setCompleted] = useState(0);

    const checkTrue = () =>{
        let count = 0;
        for (const key in props.count) {
            if (props.count[key] === true) {
                count++;
            }
        }
        return count;
    }

    useEffect(() => {
        setCompleted(checkTrue());
      }, [count]);

  return (
    <>
        <div className="list-item py-2 border-bottom d-flex justify-content-between align-items-center mt-2">
            
            <div className="d-flex flex-column w-25">
                <div className="list-item__title "><h4>{name}</h4></div>
            </div>

            <div>
                <span>Completed: </span> <span >{completed} </span>
                 / <span>7 days </span>
            </div>

            <div className="list-item__actions">
                <button onClick={() => setActiveHabitHandler(id)}
                className="btn btn-primary">Detail View</button>

                <button onClick={deleteHabitHandler} className="btn btn-danger mx-1">Delete</button>
            </div>
        </div>
    </>
  )
}

export default Listitem