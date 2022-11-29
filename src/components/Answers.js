import CheckBox from './CheckBox';
import styles from './../styles/Answers.module.css';

function Answers({options = [], handleChange}){
    return(
        <div className={styles.answers}>
            {options.map((option, index) => (<CheckBox text={option.title} value={index} key={index} className={styles.answer} checked={option.checked} onChange={(e) => handleChange(e, index)}/>))}
        </div>
    )
}

export default Answers;