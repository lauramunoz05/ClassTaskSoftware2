import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../../firebaseConfig' 

function Register () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = async () => {
        try {
            const auth = getAuth(firebaseApp);
            await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario registrado correctamente")
            setErrorMessage("El usuario fue registrado con exito")
            setEmail('')
            setPassword('')

        } catch (error) {
            console.log("Hubo un error al registrar al usuario ", error.message)
            setErrorMessage("Hubo un error al registrar al usuario ")
        }
    }

    return (
        <div className="register">
            <h2>Register</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" onClick={handleRegister}>Register</button>
            { errorMessage &&  <p>{errorMessage}</p> }
        </div>
    )
}

export default Register