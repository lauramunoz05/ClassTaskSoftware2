import { useState } from 'react'

function TaskForm ({onSubmit}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [dueDate, setDueDate] = useState('')
    const [completed, setCompleted] = useState('')
    const [subjectId, setSubjectId] = useState('')
    
    const handleTitleChanges = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChanges = (event) => {
        setDescription(event.target.value)
    }

    const handleDueDateChanges = (event) => {
        setDueDate(event.target.value)
    }

    const handleCompletedChanges = (event) => {
        setCompleted(event.target.checked)
    }

    const handleSubjectIdChanges = (event) => {
        setSubjectId(event.target.value)
    }
    

    // Funcion para enviar la informacion a la base de datos
    const handleSubmit = (event) => {
        // Para que al hacer click no se actualice la pagina
        event.preventDefault()
        onSubmit({title, description, dueDate, completed, subjectId})

        // Limpiamos el formulario
        setTitle('')
        setDescription('')
        setDueDate('')
        setCompleted(false)
        setSubjectId('')
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Title:</label> */}
            <input type="text" placeholder='Title' value={title} onChange={handleTitleChanges} required/>

            {/*<label>Description:</label> */}
            <textarea placeholder='Description' value={description} onChange={handleDescriptionChanges} required/>

            {/* <label>Fecha de Vencimiento:</label> */}
            <input placeholder='Due Date' type="date" value={dueDate} onChange={handleDueDateChanges} required/>

            {/* <label>State:</label> */}
            <div className="completed">
                <input id="completed" type="checkbox" checked={completed} onChange={handleCompletedChanges}/> 
                <label for="completed">Completed</label>    
            </div>

            {/* <label>Subject Id:</label> */}
            <input type="number" placeholder='Subject Id' value={subjectId} onChange={handleSubjectIdChanges} required/>

            <button type='submit'>Send</button>
        </form>
    )
}

export default TaskForm