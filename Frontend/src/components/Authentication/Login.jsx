import { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseApp } from '../../../firebaseConfig' 

function Login () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleLogin = async () => {
        try {
            const auth = getAuth(firebaseApp);
            await signInWithEmailAndPassword(auth, email, password);
            console.log("El usuario ha ingrasado correctamente")
            setErrorMessage("El usuario ha ingrasado correctamente")
            setEmail('')
            setPassword('')

        } catch (error) {
            console.log("Hubo un error al iniciar sesion ", error.message)
            setErrorMessage("Hubo un error al iniciar sesion")
        }
    }

    return (
        <div className="login">
            <h2>Log in</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" onClick={handleLogin}>Log in</button>
            { errorMessage &&  <p>{errorMessage}</p> }
        </div>
    )
}

export default Login