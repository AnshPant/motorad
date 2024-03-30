import React from 'react';
import { Form, message, Button } from 'antd';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import ProtectedRoute from '../../../components/ProtectedRoute';
import { loginUser } from '../../../apicalls/users';

import { HideLoading, ShowLoading } from '../../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, DiscordOutlined, GoogleOutlined, AppleOutlined } from '@ant-design/icons'; // Import icons from Ant Design
import './login.css'; // Import your CSS file

// import React from "react";

import {auth} from "../../../firebase-config";
import { provider } from "../../../firebase-config";
import { getAuth, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useState,useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"


const Login = () => {
    useEffect(()=>{
        return onAuthStateChanged(auth,(data)=>{
          if(data == null){
              console.log("aleert")
          }
          else {
              // windows.alert("logged in as student")
              alert("sucess login ");

              window.location.href = "/";
              
           }
  
           
  
        })});

        const signInWithGoogle = () => {
            signInWithPopup(auth,provider)
             
        };

    const dispatch = useDispatch();

    const onFinish = async (values) => {
        try {
            dispatch(ShowLoading());
            const response = await loginUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                localStorage.setItem("token", response.data);
                window.location.href = "/";
            } else {
                message.error(response.message);
            }
        } catch (error) {
            dispatch(HideLoading());
            message.error(error.message);
        }
    };

    return (
        <>
            <div className='login-container'>
                <div className='left-half'>
                    <div id='logo'>
                        <div id='logo-name' >
                            <b>BASE</b>
                        </div>
                    </div>
                    <div className="footer-icons">
                        <GithubOutlined />
                        <TwitterOutlined />
                        <LinkedinOutlined />
                        <DiscordOutlined />
                    </div>
                </div>
                <div className='right-half'>
                    <div className='login-card'>
                        <label className='login-label'>
                            <b>Sign In</b>
                        </label>
                        <p className="sign-in-info">Sign in to your account</p>
                        <Form layout='vertical' className='mt-2' onFinish={onFinish}>
                            <div className="external-login-buttons">
                                <Button className="external-login-btn" icon={<GoogleOutlined  style={{ color: '#DB4437' }}/>  } onClick={signInWithGoogle} type="primary">Sign in with Google</Button>
                                <Button className="external-login-btn" icon={<AppleOutlined />} type="primary">Sign in with Apple</Button>
                            </div>
                            <Form.Item name='email' label={<label style={{ color: "black" }}>Email</label>}>
                                <input type='text' />
                            </Form.Item>
                            <Form.Item label={<label style={{ color: "black" }}>Password</label>} name='password'>
                                <input type='password' />
                            </Form.Item>
                            <div className='flex flex-col gap-2'>
                                <button type='submit' className='primary-outlined-btn mt-2 w-100'>
                                    Sign In
                                </button>
                                <Link to='/register' className='col'>
                                   Don't have an account? Register Here!
                                </Link>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
