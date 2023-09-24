import { useParams } from "react-router-dom"

function User() {
    const { userid } = useParams()
    return (
        <div>
            <h1 className="text-3xl text-center text-blue-400">User : {userid}</h1>
        </div>
    )
}

export default User
