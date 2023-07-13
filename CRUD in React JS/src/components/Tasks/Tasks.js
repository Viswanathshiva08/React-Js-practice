import React from 'react'
import Task from '../Task/Task'


const Tasks = ({tasks, onDelete, onTaskReminder}) => {

  return (
   
    <div>
       
        {tasks.map((task) => (
            <Task key={task.id} 
                  task={task} 
                  onDelete={onDelete}
                  onTaskReminder={onTaskReminder}>
            </Task>
        ))}

    </div>
  )
}

export default Tasks