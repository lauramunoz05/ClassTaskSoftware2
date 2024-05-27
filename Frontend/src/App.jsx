import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import UserTable from './components/UserComponent/UserTable'
import UserForm from './components/UserComponent/UserForm'
import SubjectTable from './components/SubjectComponent/SubjectTable'
import SubjectForm from './components/SubjectComponent/SubjectForm'
import TaskTable from './components/TaskComponent/TaskTable'
import TaskForm from './components/TaskComponent/TaskForm'

function App() {
  const [users, setUsers] = useState([])
  const [editingUser, setEditingUsers] = useState(null)

  const [subjects, setSubjects] = useState([])
  const [editingSubject, setEditingSubject] = useState(null)

  const [tasks, setTasks] = useState([])
  const [editingTask, setEditingTask] = useState(null)

  //Actualiza la lista de usuarios por cada usuario nuevo
  useEffect(() => {
    fetchUsers()
  }, [])

  // Recorre la lista de usuarios y los retorna como respuesta
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/users')
      // En el estado final vamos a traer la respuesta y el cuerpo que es data
      setUsers(response.data)

    } catch (error) {
      console.log('Error al cargar los usuarios: ', error)
    }
  }

  //Permite crear un usuario o actualizarlo
  const handleCreateOrUpdateUser = async (userData) => {
    if (editingUser) {
      await axios.put(`http://localhost:8080/api/users/${editingUser.id}`, userData)      
    } else {
      await axios.post(`http://localhost:8080/api/users`, userData)
    }
  }

  //Permite editar un usuario  
  const handelEditUser = (user) => {
    //Limpia el estado
    setEditingUsers(user)
  }

  //Permite eliminar un usuario  a partir de un id 
  const handelDeleteUser = async(userId) => {
    await  axios.delete(`http://localhost:8080/api/users/${userId}`)
    fetchUsers()
  }

  // Subjects
  useEffect(() => {
    fetchSubjects(subjects)
  }, [])

  const fetchSubjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/subjects')
      setSubjects(response.data)

    } catch (error) {
      console.log('Error al cargar las materias: ', error)
    }
  }

  const handleCreateOrUpdateSubject = async (subjectData) => {
    if (editingSubject) {
      await axios.put(`http://localhost:8080/api/subjects/${editingSubject.id}`, subjectData)
    } else {
      await axios.post(`http://localhost:8080/api/subjects`, subjectData)
    }
  }

  const handelEditSubject = (subject) => {
    setEditingSubject(subject)
  }

  const handelDeleteSubject = async(subjectId) => {
    await  axios.delete(`http://localhost:8080/api/subjects/${subjectId}`)
    fetchSubjects()
  }

  // Tasks
  useEffect(() => {
    fetchTasks(tasks)
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks')
      setTasks(response.data)

    } catch (error) {
      console.log('Error al cargar las tareas: ', error)
    }
  }

  const handleCreateOrUpdateTask = async (taskData) => {
    if (editingTask) {
      await axios.put(`http://localhost:8080/api/tasks/${editingTask.id}`, taskData)
    } else {
      await axios.post(`http://localhost:8080/api/tasks`, taskData)
    }
  }

  const handelEditTask = (task) => {
    setEditingTask(task)
  }

  const handelDeleteTask = async(taskId) => {
    await  axios.delete(`http://localhost:8080/api/tasks/${taskId}`)
    fetchTasks()
  }

  return (

    <div className='App'>
      <h1>ClassTasks</h1>
      <br />
      <fieldset>
        <h2>Users</h2>
        <UserTable users={users} onEdit={handelEditUser} onDelete={handelDeleteUser} />
        <h3>{editingUser ? 'Edit User' : 'Create new user'}</h3>
        <UserForm onSubmit={handleCreateOrUpdateUser} initialUsers={editingUser} />
      </fieldset>

     <br />
     <fieldset>      
        <h2>Subjects</h2>
        <SubjectTable subjects={subjects} onEdit={handelEditSubject} onDelete={handelDeleteSubject} />
        <h3>{editingSubject ? 'Edit Subject' : 'Create new subject'}</h3>
        <SubjectForm onSubmit={handleCreateOrUpdateSubject} initialSubject={editingSubject} />
     </fieldset>

      <br />
      <fieldset>
        <h2>Tasks</h2>
        <TaskTable tasks={tasks} onEdit={handelEditTask} onDelete={handelDeleteTask} />
        <h3>{editingTask ? 'Edit task' : 'Create new task'}</h3>
        <TaskForm onSubmit={handleCreateOrUpdateTask} initialTask={editingTask} />
      </fieldset>
    </div>

  )
}

export default App
