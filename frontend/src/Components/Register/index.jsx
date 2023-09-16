import { useState } from "react";
import { useDispatch } from 'react-redux'

import {  Button, Checkbox, Form, Input,message } from "antd";
import { userSignupRequest } from "../../Reducers/Actions/userActions"

const Register = ({ handleLoginRegisterForm,setModalOpenOpen }) => {
    const [ confirmLoading, setConfirmLoading] = useState(false);
    const dispatch = useDispatch();//redux dispatch
    const [form] = Form.useForm();//获取表单数据
    const onFinish = () => {
        setConfirmLoading(true);

        //联系后端确认是否正常
        setTimeout(() => {
            //传递给后端的数据
            const {username, password} = form.getFieldsValue()
            const data = {username: username, password: password}
            //TODO: 调用 userSignupRequest action 并传递用户注册信息
            dispatch(userSignupRequest(data)).then(
                () => {
                    //注册成功后的操作
                    setConfirmLoading(false);
                    setModalOpenOpen(false);
                    message.success('Register success!');
                },
                () => {setConfirmLoading(false)} //注册失败后的操作
            )
        }, 1500);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    
    return (
        <Form 
            name="basic"
            form={form} 
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Nickname"
                name="nickname"
                rules={[{ required: false, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>
        
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                label="Confirm Password"
                name="confirm-password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Agree the policy</Checkbox>
            </Form.Item>
            <hr/>
            <p className="my-5">Already have account? <span className='my-3 cursor-pointer underline decoration-1 tracking-wide' onClick={handleLoginRegisterForm} >Login here</span></p>
            <Button className='text-black border border-1' key="submit" type="primary" loading={confirmLoading} onClick={onFinish}>Register</Button>
        </Form>
    );
}



export default Register;