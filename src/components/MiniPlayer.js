import styles from './../styles/MiniPlayer.module.css';
import MiniLogo from './../assets/images/3.jpg';

function MiniPlayer(){
    return(
        <div className={`${styles.miniPlayer} ${styles.floatingBtn}`}>
           <span className={`material-icons-outlined ${styles.open}`}> play_circle_filled </span>
           <span className={`material-icons-outlined ${styles.close}`}> close </span>
           <img src={MiniLogo} alt="Mini Player" />
           <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div> 
    )
}

export default MiniPlayer;