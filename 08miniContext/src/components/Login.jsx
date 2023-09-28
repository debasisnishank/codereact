import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <>
        <div className='mx-auto container border-blue-50'>
            <h2 className='text-3xl text-gray-700'>Login</h2>
            
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </>
    )
}

export default Login
