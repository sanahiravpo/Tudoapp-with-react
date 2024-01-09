import React from 'react'

function ListTask({task,index,removeTask}) {
  return (
    <div>
        <div className="list-tasks">
        {task.title}
            <button onClick={()=>{removeTask(index)}}className="delete-btn">Delete</button>
        </div>
    </div>
  )
}

export default ListTask;