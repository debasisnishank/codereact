// import React from 'react'

// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/debasisnishank')
    //         .then(res => res.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }
    //     , [])
    return (
        <div className='text-center m-4 text-3xl p-4 bg-gray-600 text-white'>
            Github Followers : {data.followers}
            <img width={300} src={data.avatar_url} alt="Git Profile" />
        </div>
    )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubinfoLoader = async() => {
const res = await fetch('https://api.github.com/users/debasisnishank')
return res.json()
}