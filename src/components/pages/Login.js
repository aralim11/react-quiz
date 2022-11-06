import Illustration from './../Illustration';
import loginImage from './../../assets/images/login.svg';
import Form from './../Form';
import styles from './../../styles/Login.module.css';
import TextInput from './../TextInput';
import Button from './../Button';
import { useState } from 'react';
import { useAuth } from './../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const { login } = useAuth();
    const nevigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        try {
            setError("");
            await login(email, password);
            nevigate('/');
        } catch (error) {
            console.log(error);
            setError("Failed To Login!!");
        }
    }

    return(
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration image={loginImage} altText="Login"/>

                <Form className={`${styles.login}`} onSubmit={handleSubmit}>
                    <TextInput type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeHolder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" required value={password} onChange={(e) => setPassword(e.target.value)}  placeHolder="Enter Password" icon="lock" />
                    <Button type="submit">Submit</Button>
                    {error && <p className='error'>{error}</p>}
                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login;