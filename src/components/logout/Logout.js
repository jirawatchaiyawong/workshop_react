import React,{} from 'react'

export default function Logout(props) {

    localStorage.clear()
    if(!localStorage.getItem('user')){
        props.history.push('/login')
    }
    return (
        <div>
        </div>
    )
}
