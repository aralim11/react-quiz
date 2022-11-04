import image from './../assets/images/3.jpg';
import styles from './../styles/Video.module.css';

function Video(){
    return(
        <a href="quiz.html">
            <div className={styles.video}>
                <img src={image} alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={styles.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div><div></div>
        </a>
    )
}

export default Video;