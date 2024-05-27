import { useState } from 'react'

function UserForm ({onSubmit}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleNameChanges = (event) => {
        setName(event.target.value)
    }

    const handleEmailChanges = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChanges = (event) => {
        setPassword(event.target.value)
    }

    // Funcion para enviar la informacion a la base de datos
    const handleSubmit = (event) => {
        // Para que al hacer click no se actualice la pagina
        //event.preventDefault()
        onSubmit({name, email, password})

        // Limpiamos el formulario
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <label>Name:</label> */}
            <input type="text" placeholder='Name' value={name} onChange={handleNameChanges} required/>

       {/*      <label>Email:</label> */}
            <input type="email" placeholder='Email' value={email} onChange={handleEmailChanges} required/>

            {/* <label>Password:</label> */}
            <input type="password" placeholder='Password' value={password} onChange={handlePasswordChanges} required/>

            <button type='submit'>Send</button>
        </form>
    )
}

export default UserForm