import Illustration from './../Illustration';
import loginImage from './../../assets/images/login.svg';
import Form from './../Form';
import styles from './../../styles/Login.module.css';
import TextInput from './../TextInput';
import Button from './../Button';

function Login(){
    return(
        <>
            <h1>Login to your account</h1>
            <div class="column">
                <Illustration image={loginImage} altText="Login"/>

                <Form className={`${styles.login}`}>
                    <TextInput type="email" placeHolder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeHolder="Enter Password" icon="lock" />
                    <Button>Submit</Button>
                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Login;