import Illustration from './../Illustration';
import Form from './../Form';
import styles from './../../styles/Signup.module.css';
import TextInput from './../TextInput';
import CheckBox from './../CheckBox';
import Button from './../Button';
import signupImage from './../../assets/images/signup.svg';
import { useState } from 'react';
import { useAuth } from './../../contexts/AuthContext';

function Signup(){

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [agree, setAgree] = useState("");

    const {signup} = useAuth();

    return(
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage} altText="Signup"/>
            
                <Form className={`${styles.signup}`}>
                    <TextInput type="text" placeHolder="Enter Name" value={username} onChange={(e) => setUserName(e.target.value)} icon="person" />
                    <TextInput type="email" placeHolder="Enter Email" icon="alternate_email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextInput type="password" placeHolder="Enter Password" icon="lock" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <TextInput type="password" placeHolder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                    <CheckBox text="I agree to the Terms & Conditions"/>
                    <Button>Submit</Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Signup;