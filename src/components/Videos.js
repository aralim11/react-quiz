import styles from './../styles/Videos.module.css';
import Video from './Video';
import { Link } from "react-router-dom";
import userVideoList from '../hooks/useVideoList';

function Videos(){
    const {videos} = userVideoList();
    // console.log(videos);
    return(
        <div className={styles.videos}>
            <Link to="/quiz"><Video/></Link>
        </div>
    )
}

export default Videos;