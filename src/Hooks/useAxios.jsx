import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { BASE_URL } from '../config/base_url';

const useAxios = () => {
    useEffect(()=>{
        axios(`${BASE_URL}/services`)
        .then(res => console.log(res.data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default useAxios;