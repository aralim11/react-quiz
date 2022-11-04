import styles from './../styles/Summery.module.css';
import successLogo from './../assets/images/success.png';

function Summery(){
    return(
        <div className={styles.summary}>
            <div className={styles.point}>
                <p className={styles.score}>
                Your score is <br />
                5 out of 10
                </p>
            </div>

            <div className={styles.badge}>
                <img src={successLogo} alt="Success" />
            </div>
        </div>
    )
}

export default Summery;