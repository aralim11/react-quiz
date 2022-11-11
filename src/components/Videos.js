import styles from './../styles/Videos.module.css';
import useVideoList from '../hooks/useVideoList';
import Video from './Video';
import { Link } from "react-router-dom";

function Videos(){
    const {videos, loading} = useVideoList(0);
    // console.log(videos);
    return(
        <div className={styles.videos}>
            <Link to="/quiz"><Video o/></Link>
        </div>
    )
}

export default Videos;