import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then(data => {
        setChannelDetail(data?.items[0]);
        console.log(data?.items[0]);
      })

      const fetchVideos = (
        pageToken = undefined,
        counter = 0,
        videosData = []
      ) => {
        const prefPageToken = pageToken ? `&pageToken=${pageToken}` : "";
  
        if (counter < 3) {
          fetchFromAPI(
            `search?channelId=${id}&part=snippet%2Cid&order=date${prefPageToken}`
          ).then((data) => {
            fetchVideos(data.nextPageToken, counter + 1, [
              ...videosData,
              ...data.items,
            ]);
          });
        } else if (counter === 3) {
          console.log(videosData);
          setVideos(videosData);
        }
      };
  
      fetchVideos();
  }, [id]);

  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(212,6,48,1) 36%, rgba(255,222,0,1) 100%)',
          zIndex: 100,
          height: '300px'
        }}/>
      </Box>
      <ChannelCard channel={channelDetail} marginTop={-90} />

        <Box display='flex' p='2'>
          <Box sx={{mr: { sm: '50px'}}} />
          <Videos videos={videos} />
        </Box>
    </Box>
  )
}

export default ChannelDetail;