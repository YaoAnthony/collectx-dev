import { useState } from "react";
import { useDispatch } from 'react-redux'

import { Modal, Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import Register from "../Register";
import { userSigninRequest } from "../../Reducers/Actions/userActions"

const LoginForm = ({ handleLoginRegisterForm,setModalOpenOpen }) => {
    const [ confirmLoading, setConfirmLoading] = useState(false); //点击login后的loading状态
    const [ errorMessage, setErrorMessage] = useState(''); //登录失败后的错误信息
    const [form] = Form.useForm();//获取表单数据
    const dispatch = useDispatch();//redux dispatch

    const onFinish = () => {
        setConfirmLoading(true);//点击login后的loading状态
        
        //联系后端确认是否正常
        setTimeout(() => {
            //传递给后端的数据
            const {username, password} = form.getFieldsValue()
            const data = {username: username, password: password}
            // 调用 userSigninRequest action 并传递用户登录信息
            dispatch(userSigninRequest(data)).then(
                () => {
                    //登录成功后的操作
                    setConfirmLoading(false);
                    setModalOpenOpen(false);
                    
                    //TODO: 如果填写了remember me，将用户信息存入localStorage
                },
                ({response}) => {
                    //登录失败后的操作
                    setErrorMessage(response.data.message)
                    setConfirmLoading(false);
                }
            )
        }, 500);
    };
    
    //登录失败后的操作
    const onFinishFailed = () => {
        message.success('Login Failed!');
    };
    
    return (
        <Form
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        >
        <Form.Item
            name="username"
            rules={[{ 
                required: true, 
                message: "Please input your username!" 
            }]}
        >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
    
        <Form.Item
            name="password"
            rules={[{ 
                required: true, 
                message: "Please input your password!" 
            }]}
        >
            <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
        </Form.Item>
    
        <Form.Item name="remember" valuePropName="checked">
            <div  className="flex justify-between">
                <Checkbox>Remember me</Checkbox>

                <a className="login-form-forgot" href="">Forgot password ?</a>
            </div>
            
        </Form.Item>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <hr />
        <p
            className="my-5 cursor-pointer underline decoration-1 tracking-wide"
            onClick={handleLoginRegisterForm}
        >
            Register here
        </p>
        <Form.Item>
            <Button 
                className='text-black border border-1' 
                key="submit" 
                loading={confirmLoading} 
                onClick={onFinish}>Login</Button>
        </Form.Item>
        </Form>
    );
}

const Login = ({loginModalOpen, setModalOpenOpen}) => {
    const [title, setTitle] = useState('Login');
    const [isLoginForm, setIsLoginForm] = useState(true); // true = login, false = register

    //当点击空白处关闭Modal
    const handleCancel = () => {
        setModalOpenOpen(false);
    };

    //切换login和register
    const handleLoginRegisterForm = () => {
        setIsLoginForm(!isLoginForm);
        setTitle(isLoginForm ? 'Register' : 'Login');
    }

    return(
        <Modal
            title={title}
            open={loginModalOpen}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 400 }}
            onCancel={handleCancel}
            footer={null}
        >
            {isLoginForm ? 
                <LoginForm handleLoginRegisterForm={handleLoginRegisterForm} setModalOpenOpen={setModalOpenOpen}/>
              : 
                <Register handleLoginRegisterForm = {handleLoginRegisterForm} setModalOpenOpen = {setModalOpenOpen}/>}
        </Modal>

    )

}


export default Login;