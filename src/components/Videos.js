import styles from './../styles/Videos.module.css';
import Video from './Video';
import { Link } from "react-router-dom";

function Videos(){
    return(
        <div className={styles.videos}>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
            <Link to="/quiz"><Video/></Link>
        </div>
    )
}

export default Videos;