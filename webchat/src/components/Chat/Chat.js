import React, { useEffect, useState } from 'react'
import { user } from '../Join/Join'
import socketIO from 'socket.io-client'
import './Chat.css'
import closeIcon from '../../images/icons8-close-30.png'
import Message from '../Message/Message'
import ReactScrollToBottom from "react-scroll-to-bottom"
let socket;
const ENDPOINT = "https://webchat-0015904916fc.herokuapp.com/";
const Chat = () => {
    const [id, setid] = useState("");

    const [messages, setMessages] = useState([]);

    const send = () => {
        const message = document.getElementById('chatInput').value;
        console.log(message)
        socket.emit('message', { message, id })
        document.getElementById('chatInput').value = "";
    }

    useEffect(() => {
        socket = socketIO(ENDPOINT, { transports: ['websocket'] });
        socket.on('connect', () => {
            alert('Connected')
            setid(socket.id);

        }
        )

        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('disconnected');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data])
            console.log(data.user, data.message, data.id)
        })

        return () => {
            socket.off()
        }
    }, [messages])



    return (

        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>Webchat</h2>
                    <a href="/"><img src={closeIcon} alt="closeicon" /></a>

                </div>

                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => {
                        return (
                            <Message classs={item.id === id ? 'right' : 'left'} message={item.message}
                                user={item.id === id ? '' : item.user}
                                key={item.id} />
                        )
                    })}

                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(e) => e.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn">Send</button>
                </div>

            </div>
        </div>

    )
}

export default Chat
