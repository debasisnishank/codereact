import { useContext } from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const { user } = useContext(UserContext)

    if (!user) {
        return <div>Please log in !</div>
    } else {
        return <div>Welcome {user.username} password {user.password}  </div>
    }
}

export default Profile
