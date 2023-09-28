import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Join.css'
import logo from '../../images/chat.png'

let user;

function Join() {

    const sendUser = () => {
        user = document.getElementById('joininput').value;
        document.getElementById('joininput').value = '';
    }
    const [name, setName] = useState("");
    console.log(name);
    return (
        <div className='JoinPage'>
            <div className='JoinContainer'>
                <img src={logo} alt="logo" />
                <h1>WebChat</h1>
                <input onChange={(e) => setName(e.target.value)} type="text" id="joininput" placeholder='enter your name' />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat"><button class="joinbtn" onClick={sendUser}>Login</button></Link>
            </div>
        </div>
    )
}

export default Join
export { user }
