import styles from './../styles/ProgressBar.module.css';
import stylesButton from './../styles/Button.module.css';

function ProgressBar(){
    return(
        <div className={styles.progressBar}>
            <div className={styles.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>

            <div className={styles.rangeArea}>
                <div className={styles.tooltip}>24% Cimplete!</div>
                <div className={styles.rangeBody}>
                    <div className={styles.progress} style={{width: '20%'}}></div>
                </div>
            </div>

            <a href="result.html">
                <button className={`${stylesButton.button} ${styles.next}`}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </button>
            </a>
        </div>
    )
}

export default ProgressBar;