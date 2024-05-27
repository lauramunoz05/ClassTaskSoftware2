import { useState } from 'react'

function SubjectForm ({onSubmit}) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [userId, setUserId] = useState('')
    
    const handleNameChanges = (event) => {
        setName(event.target.value)
    }

    const handleDescriptionChanges = (event) => {
        setDescription(event.target.value)
    }

    const handleUserIdChanges = (event) => {
        setUserId(event.target.value)
    }

    // Funcion para enviar la informacion a la base de datos
    const handleSubmit = (event) => {
        // Para que al hacer click no se actualice la pagina
        //event.preventDefault()
        onSubmit({name, description, userId})

        // Limpiamos el formulario
        setName('')
        setDescription('')
        setUserId('')
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Name:</label> */}
            <input type="text" placeholder='Name' value={name} onChange={handleNameChanges} required/>

       {/*      <label>Descripcion:</label> */}
            <input type="text" placeholder='Description' value={description} onChange={handleDescriptionChanges} required/>

            {/* <label>Id de Usuario:</label> */}
            <input type="number" placeholder='User Id' value={userId} onChange={handleUserIdChanges} required/>

            <button type='submit'>Send</button>
        </form>
    )
}

export default SubjectForm