import styles from './../styles/Form.module.css';

function From({children, className}){
    return(
        <form className={`${className} ${styles.form}`} action="#">
            {children}
            {/* <div class="textInput">
                <input type="text" placeholder="Enter name" />
                <span class="material-icons-outlined"> person </span>
            </div>

            <div class="textInput">
                <input type="text" placeholder="Enter email" />
                <span class="material-icons-outlined"> alternate_email </span>
            </div>

            <div class="textInput">
                <input type="password" placeholder="Enter password" />
                <span class="material-icons-outlined"> lock </span>
            </div>

            <div class="textInput">
                <input type="password" placeholder="Confirm password" />
                <span class="material-icons-outlined"> lock_clock </span>
            </div>

            <label>
                <input type="checkbox" />
                <span>I agree to the Terms & Conditions</span>
            </label>

            <div class="button">
                <span>Submit now</span>
            </div>

            <div class="info">
                Already have an account? <a href="login.html">Login</a> instead.
            </div> */}
        </form>
    )
}

export default From;