import styles from './../styles/TextInput.module.css';

function TextInput({type, placeHolder, icon, ...rest}){
    return(
        <div className={styles.textInput}>
            <input type={type} placeholder={placeHolder} {...rest}/>
            <span className="material-icons-outlined"> {icon} </span>
        </div>
    )
}

export default TextInput;