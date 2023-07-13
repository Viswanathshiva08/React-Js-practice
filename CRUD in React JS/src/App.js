
import{useState} from 'react'
import './App.css';
import AddTask from './components/Add task/Addtask';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'movie Time',
        day:'Oct 17th at 9:30 AM',
        reminder: true
    },
    {
        id:2,
        text:'Reading Time',
        day:'Oct 18th at 5:30 PM',
        reminder: false
    },
    {
        id:3,
        text:'Yoga practice',
        day:'Oct 22th at 9:30 AM',
        reminder: false
    }
])


// add task

const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000)+1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
}



// delete data

const deleteTask = (id) => {
  // 1
  //  2 3 
  setTasks(tasks.filter((task) => task.id !== id))
}

// task reminder

const onTaskReminder = (id) => {
  setTasks(
    tasks.map((task) => task.id === id ?{...task, reminder:!task.reminder}: task))

}



  return (
    <div className="container">
        <Header/>
        <AddTask onAdd={addTask}/>
        
        {tasks.length > 0 ? 
        <Tasks tasks={tasks}
         onDelete={deleteTask} 
         onTaskReminder={onTaskReminder}/>
         : ('No tasks to display')}
     
    </div>
  );
}

export default App;
