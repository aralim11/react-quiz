import styles from './../styles/ProgressBar.module.css';
import stylesButton from './../styles/Button.module.css';

function ProgressBar({next, prev, progress, submit}){
    return(
        <div className={styles.progressBar}>
            <div className={styles.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>

            <div className={styles.rangeArea}>
                <div className={styles.tooltip}>{progress} % Cimplete!</div>
                <div className={styles.rangeBody}>
                    <div className={styles.progress} style={{width: `${progress}%`}}></div>
                </div>
            </div>
   
            <button className={`${stylesButton.button} ${styles.next}`} onClick={progress === 100 ? submit : next}>
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </button>
            
        </div>
    )
}

export default ProgressBar;