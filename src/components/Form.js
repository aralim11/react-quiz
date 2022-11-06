import styles from './../styles/Form.module.css';

function From({children, className, ...rest}){
    return(
        <form className={`${className} ${styles.form}`} action="#" {...rest}>
            {children}
        </form>
    )
}

export default From;