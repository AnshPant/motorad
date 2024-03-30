import React from 'react'
import { Form, message ,Button, Input} from 'antd';
import { Link } from 'react-router-dom';
import { registerUser } from '../../../apicalls/users';
import { HideLoading, ShowLoading } from '../../../redux/loaderSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GithubOutlined, TwitterOutlined, LinkedinOutlined, DiscordOutlined, GoogleOutlined, AppleOutlined } from '@ant-design/icons';
import './register.css'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();;
    const onFinish = async (values) => {
        console.log("login login");
        try {
            dispatch(ShowLoading());
            console.log(response);
            const response = await registerUser(values);
            dispatch(HideLoading());
            if (response.success) {
                message.success(response.message);
                navigate("/login");
            }
            else {

                message.error(response.message);
            }

        } catch (error) {
            dispatch(HideLoading());
            console.log(error);
            message.error(error.message);
        }
    }

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
                        <b>Register</b>
                    </label>
                    <p className="sign-in-info">Create an account</p>
                    {/* <Form layout='vertical' onFinish={onFinish}> */}
                    <Form layout='vertical' >
                        <div className="external-login-buttons">
                            <Button className="external-login-btn" icon={<GoogleOutlined  style={{ color: '#DB4437' }}/>} type="primary">Sign up with Google</Button>
                            <Button className="external-login-btn" icon={<AppleOutlined />} type="primary">Sign up with Apple</Button>
                        </div>
                        <Form.Item name='name' label='Name'>
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item name='email' label='Email'>
                            <Input type='text' />
                        </Form.Item>
                        <Form.Item name='password' label='Password'>
                            <Input.Password />
                        </Form.Item>
                        <div className='flex flex-col gap-2'>
                            <Button type='submit' className='primary-outlined-btn mt-2 w-100' onClick={onFinish}>
                                Register
                            </Button>
                            <Link to='/login' className='col'>
                                Already a member? Login
                            </Link>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register