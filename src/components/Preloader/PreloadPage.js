import React from 'react'
import { useEffect } from 'react';

export const PreloadPage = () =>{
    useEffect(() =>{
        window.addEventListener('load', () =>{
            return null
        })
    },[])


    return(
        <div>
            {/* TODO : Add loading UI  */}
            Preload Page.....
        </div>
    )
}