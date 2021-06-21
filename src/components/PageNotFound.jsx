import React from 'react'
import error from '../assets/error.png'

 

export const PageNotFound=()=>{
    return (
        <div style={{ textAlign:"center"}} >
        <h1 >PAGE NOT FOUND</h1>
        <img  src={error} alt="Sad Robot"/>
        </div>
    )
}