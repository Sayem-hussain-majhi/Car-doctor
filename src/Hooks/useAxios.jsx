import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';

const useAxios = () => {
    useEffect(()=>{
        axios('http://localhost:3000/services')
        .then(res => console.log(res.data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default useAxios;