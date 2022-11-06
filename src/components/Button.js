import styles from './../styles/Button.module.css';

function Button({children, className, ...rest}){
    return(
        <button className={`${styles.button} ${className}`} {...rest}>
            <span>{children}</span>
        </button>
    )
}

export default Button;