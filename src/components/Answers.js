import CheckBox from './CheckBox';
import styles from './../styles/Answers.module.css';

function Answers(){
    return(
        <div className={styles.answers}>
            <CheckBox text="A New Hope 1" className={styles.answer}/>
        </div>
    )
}

export default Answers;