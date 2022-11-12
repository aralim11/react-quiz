import useVideoList from '../hooks/useVideoList';
import Video from './Video';
import { Link } from "react-router-dom";
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

function Videos(){
    const [page, setPage] = useState(1);
    const {videos, loading, hasMore} = useVideoList(page);
    
    return(
        <div>
            {videos.length > 0 && (
                <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page + 8)} loader={<h4>Loading</h4>}>
                    {videos.map((video) => video.index > 0 ?
                        (
                            <Link to="/quiz" key={video.youtubeID}>
                                <Video title={video.title} id={video.youtubeID} noq={video.noq}/>
                            </Link>
                        ) : (<Video key={video.youtubeID} title={video.title} id={video.youtubeID} noq={video.noq}/>)
                    )}
                </InfiniteScroll>
            )}
            {!loading && videos.length === 0 && <div>No Data Found</div>}
            {loading && <div>Loading</div>}
        </div>
    )
}

export default Videos;