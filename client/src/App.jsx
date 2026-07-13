import { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import About from './components/About';
import Filterbar from "./components/FilterBar"
import TaskCard from './components/TaskCard';
function App() {
  const [tasks, setTasks] = useState([]);
  const [fil,setFilter] = useState("");


const search = (tasks = []) =>
  tasks.filter(task =>
    !fil || task.title.toLowerCase().includes(fil.toLowerCase())
  );

useEffect(() => {
  getTasks();
}, []);


  const getTasks = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/tasks"
    );

    setTasks(response.data);
  } catch (error) {
    console.error("Failed to fetch tasks:", error);
  }
};

const addTask = async (taskData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/tasks",
      taskData
    );

    const newTask = response.data;

    setTasks((prevTasks) => [...prevTasks, newTask]);
  } catch (error) {
    console.error("Failed to add task:", error);
  }
};

const updateTask = async (id, updatedTask) => {
  
   console.log("ID:", id);
  console.log("Data:", updatedTask);

  try {
    const response = await axios.put(
      `http://localhost:3000/tasks/${id}`,
      updatedTask
    );

    const updated = response.data;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? updated : task
      )
    );
  } catch (error) {
    console.error("Failed to update task:", error);
  }
};


const deleteTask = async (id) => {
  try {
    await axios.delete(
      `http://localhost:3000/tasks/${id}`
    );

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
};
   


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route
          path="/tasks"
          element={
            <div className="container py-4">
              <TaskForm onAddTask={addTask} />
              <Filterbar
  fil={fil}
  setFilter={setFilter}
/>
             <TaskList
  filteredTasks={search(tasks)}
  onDelete={deleteTask}
  onEdit={updateTask}
/>
            </div>
          }
        />
        <Route
          path="/tasks/new"
          element={
            <div className="container py-4">
              <TaskForm onAddTask={addTask} />
            </div>
          }
        />
        <Route
          path="/tasks/:id/"
          element={
            <div className="container py-4">
                <TaskList
  filteredTasks={search(tasks)}
  onDelete={deleteTask}
  onEdit={updateTask}
/>
            </div>
          }
        />
    
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
