import Illustration from './../Illustration';
import Form from './../Form';
import styles from './../../styles/Signup.module.css';
import TextInput from './../TextInput';
import CheckBox from './../CheckBox';
import Button from './../Button';
import signupImage from './../../assets/images/signup.svg';

function Signup(){
    return(
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration image={signupImage} altText={Signup}/>
            
                <Form className={`${styles.signup}`}>
                    <TextInput type="text" placeHolder="Enter Name" icon="person" />
                    <TextInput type="email" placeHolder="Enter Email" icon="alternate_email" />
                    <TextInput type="password" placeHolder="Enter Password" icon="lock" />
                    <TextInput type="password" placeHolder="Confirm password" icon="lock_clock" />
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