import React, { useState } from 'react';
const { default: axiosInstance } = require(".");

export const registerUser = async (payload) => {
    // const [message, setMessage] = useState('');
    
    
    try {
        console.log("we have entered api call resterUser");
        console.log("from client side",payload);
        const response = await axiosInstance.post('/api/users/register', payload);
        
        // let response = await fetch("/register", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({ message: "Hello from client"}) // Sending a message from client
        //   })
        //   .then(response => {
        //     if (!response.ok) {
        //       throw new Error(`HTTP error! Status: ${response.status}`);
        //     }
        //     return response.json();
        //   })
        //   .then(data => {
        //     // Display the received message in an alert box
        //     alert(data.message);
        //   })
        //   .catch(error => {
        //     // Handle errors
        //     console.error("Error:", error);
        //   });
        console.log(response);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const loginUser = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/users/login', payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const getUserInfo = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/users/get-user-info');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

