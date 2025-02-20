'use client';
import React, { useEffect, useState } from 'react'
import Task from './Task';
import { AddTodo, deleteTodo, getAllTodos, toggleTodo, updateTodo } from '@/actions/todo.actions';
import { getAllUsers } from '@/actions/user.actions';


const Todo = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('')
  const [allusers, setUsers] = useState([])
  const [filteredTasks, setFilteredTasks] = useState(tasks)
  const [activeFilter, setActiveFilter] = useState('All');


  const handleGetAlltodos = async () => {
    const response = await getAllTodos(userId);
    console.log(userId);
    console.log(response);
    if (response.success) {
      setTasks(response.todos);
    }
  };

  const getAllusers = async () => {
    const response = await getAllUsers();
    console.log('ResUser', response);
    if (response.success) {
      setUsers(response.users);
    }
  };


  useEffect(() => {
    handleGetAlltodos();
    getAllusers();
  }, []);

  const handleAddTask = async (e) => {
    e.preventDefault()
    if (newTask.trim() === '') return;
    const response = await AddTodo(newTask, false, userId, userId)
    if (response && response.success) {
      setTasks([
        ...tasks,
        {
          _id: response.todo._id,
          text: newTask,
          completed: false,
          assigned_to: response.todo.assigned_to,
          creator: response.todo.creator,
        },
      ]);
      setNewTask('');
    } else {
      console.log('failed to ad task to database');
    }
  }

  const handleToggleTask = async (id) => {
    const response = await toggleTodo(id, userId);
    console.log(response);
    if (response.success) {
      setTasks(
        tasks.map((task) =>
          task._id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  };

  const handleDeleteTask = async (id) => {
    const response = await deleteTodo(id, userId);
    if (response && response.success) {
      setTasks(tasks.filter((task) => task._id !== id));
    }
  };

  const handleEditTask = async (id, newText, newAssignedTo) => {
    console.log('EditTask', id, newText, newAssignedTo);
    const response = await updateTodo(id, userId, newText, newAssignedTo);
    if (response.success) {
      setTasks(
        tasks.map((task) =>
          task._id === id
            ? {
              ...task,
              text: newText,
              assigned_to: response.todo.assigned_to,
              creator: response.todo.creator,
            }
            : task
        )
      );
    }
  };


  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const completePercentage = Math.round(
    (completedTasksCount / tasks.length) * 100
  );


  const getCompletionMessage = (percentage) => {
    if (percentage >= 100) {
      return 'Wow, Awesome job, you are a rockstar!';
    } else if (percentage >= 66) {
      return 'You are rocking today!';
    } else if (percentage >= 33) {
      return 'Keep it up!';
    } else {
      return 'You can do it!';
    }
  };

  const filterLabels = {
    All: 'All',
    Self: 'Your Tasks',
    AssignedToYou: 'Assigned To You',
    AssignedByYou: 'Assigned By You',
  };

  const handleTaskSort = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      setFilteredTasks(tasks);
    } else if (filter === 'AssignedToYou') {
      setFilteredTasks(tasks.filter((task) => task.creator._id !== userId));
    } else if (filter === 'Self') {
      setFilteredTasks(
        tasks.filter((task) => task.assigned_to?._id === userId)
      );
    } else if (filter === 'AssignedByYou') {
      setFilteredTasks(
        tasks.filter(
          (task) =>
            task.creator._id === userId && task.assigned_to?._id !== userId
        )
      );
    }
  }

  useEffect(() => {
    setFilteredTasks(tasks)
  }, [tasks])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-4">Your Tasks</h1>
        <div className="text-center mb-6">
          <div className="text-xl">Tasks Completed</div>
          <div className="text-3xl font-bold text-blue-500">
            {completedTasksCount}/{tasks.length}
          </div>
          <div>{getCompletionMessage(completePercentage)}</div>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white"
            placeholder="write your next task"
          />
          <button
            className="bg-blue-500 p-2 rounded-r-lg"
            onClick={handleAddTask}
          >
            +
          </button>
        </div>

        <div className="flex justify-center mb-2">
          {['All', 'Self', 'AssignedToYou', 'AssignedByYou'].map((filter) => (
            <button
              key={filter}
              onClick={() => handleTaskSort(filter)}
              className={`border-solid border-white border-b-2 rounded px-4 py-1 mr-2 ${activeFilter === filter ? 'bg-blue-500 text-white' : ''
                }`}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>

        <ul>
          {filteredTasks.length > 0 ? filteredTasks.map((task) => (
            <Task
              key={task._id}
              task={task}
              userId={userId}
              allusers={allusers}
              handleToggleTask={handleToggleTask}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
            />
          )) : 'No Tasks'}
        </ul>
      </div>
    </div>
  )
}

export default Todo